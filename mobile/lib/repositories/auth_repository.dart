import 'package:feedback_gen/api/api_client.dart';
import 'package:feedback_gen/app/app_config.locator.dart';
import 'package:feedback_gen/constants/storage_keys.dart';

import '../api/api_response.dart';
import '../constants/constants.dart'
    show ApiConstants, AuthType, PasswordResetType;
import '../models/user.dart';
import '../services/services.dart' show StorageService;

class AuthRepository {
  final _apiClient = locator<ApiClient>();
  final _storage = locator<StorageService>();

  User? _user;

  User? get userDetails => _user;

  bool? get userAuthenticated => _storage.containsKey(AppStorageKeys.token);

  void saveAuthToken(String token) {
    _storage.setString(AppStorageKeys.token, token);
  }

  String? get _token => _storage.getString(AppStorageKeys.token);

  void saveUserInfo(Map<String, dynamic> userJson) {
    _user = User.fromJson(userJson);
    _storage.setMap(AppStorageKeys.user, userJson);
  }

  void getSavedUser() {
    final userJson = _storage.getMap(AppStorageKeys.user);
    _user = User.fromJson(userJson);
  }

  Future<void> logout() async {
    Future.wait([
      _storage.clear(AppStorageKeys.token),
      _storage.clear(AppStorageKeys.user),
    ]);
  }

  Future<ApiResponse> performAuth({
    required Map<String, dynamic> body,
    required AuthType type,
    String? token,
  }) async {
    return await _apiClient.post(
      type == AuthType.login
          ? ApiConstants.user + ApiConstants.login
          : ApiConstants.user,
      body: body,
    );
  }

  Future<ApiResponse> updateUserName(
      {required Map<String, dynamic> body}) async {
    return await _apiClient.put(
      '${ApiConstants.user}${_user!.id}',
      body: body,
      token: _token!,
    );
  }

  Future<ApiResponse> resetPassword({
    required Map<String, dynamic> body,
    required PasswordResetType resetType,
  }) async {
    if (resetType == PasswordResetType.forgot) {
      return await _apiClient.post(
        ApiConstants.user + ApiConstants.resetPassword,
        body: body,
      );
    } else {
      return await _apiClient.post(
        '${ApiConstants.user}${ApiConstants.resetPassword}${_user!.id!}/$_token',
        body: body,
        token: _token!,
      );
    }
  }
}
