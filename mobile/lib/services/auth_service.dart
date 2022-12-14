import 'package:dio/dio.dart';
import 'package:feedback_gen/api/api_exceptions.dart';
import 'package:feedback_gen/api/api_result.dart';
import 'package:feedback_gen/api/failed_response.dart';
import 'package:feedback_gen/app/app_config.logger.dart';
import 'package:stacked/stacked.dart';
import '../app/app_config.locator.dart';
import '../constants/constants.dart' show AuthType, PasswordResetType;
import '../models/user.dart';
import '../repositories/repositories.dart' show AuthRepository;

class AuthService with ReactiveServiceMixin {
  final _authRepo = locator<AuthRepository>();
  final logger = getLogger('AuthService');

  bool get userAuthenticated => _authRepo.userAuthenticated!;

  User? get user => _authRepo.userDetails;

  void loadUserDetails() {
    _authRepo.getSavedUser();
  }

  Future logout() async {
    await _authRepo.logout();
  }

  Future<ApiResult> login({
    required Map<String, dynamic> data,
  }) async {
    try {
      logger.i('Attempting login..');
      final response =
          await _authRepo.performAuth(body: data, type: AuthType.login);
      _authRepo.saveAuthToken(response.data!['auth']);
      _saveUser(response.data!['data']);
      return ApiResult.success(data: response.data!['message']);
    } on DioError catch (e) {
      logger.e(e.message);
      return ApiResult.failure(
        error: FailedResponse(
          exception: ApiExceptions.getDioException(e.error),
          error: ApiError.fromJson(e.response?.data),
        ),
      );
    } catch (_) {
      rethrow;
    }
  }

  Future<ApiResult> register({required Map<String, dynamic> data}) async {
    try {
      logger.i('Attempting registeration..');
      final response =
          await _authRepo.performAuth(body: data, type: AuthType.register);
      _authRepo.saveAuthToken(response.data!['auth']);
      _saveUser(response.data!['data']);
      return ApiResult.success(data: response.data!['message']);
    } on DioError catch (e) {
      logger.e(e.message);
      return ApiResult.failure(
        error: FailedResponse(
          exception: ApiExceptions.getDioException(e.error),
          error: ApiError.fromJson(e.response?.data),
        ),
      );
    } catch (_) {
      rethrow;
    }
  }

  Future<ApiResult> updateUserName({required User user}) async {
    logger.i('Updating username...');
    try {
      final response =
          await _authRepo.updateUserName(body: user.toJsonWithoutId());
      _saveUser(user.toJson(), isReactive: true);
      return ApiResult.success(data: response.data!['message']);
    } on DioError catch (e) {
      logger.e(e.message);
      return ApiResult.failure(
        error: FailedResponse(
          exception: ApiExceptions.getDioException(e.error),
          error: ApiError.fromJson(e.response?.data),
        ),
      );
    } catch (e) {
      rethrow;
    }
  }

  Future<ApiResult> resetPassword({
    required Map<String, dynamic> data,
    required PasswordResetType resetType,
  }) async {
    try {
      logger.i('Resetting password..');
      final response =
          await _authRepo.resetPassword(body: data, resetType: resetType);
      return ApiResult.success(data: response.data!['message']);
    } on DioError catch (e) {
      logger.e(e.message);
      return ApiResult.failure(
        error: FailedResponse(
          exception: ApiExceptions.getDioException(e.error),
          error: ApiError.fromJson(e.response?.data),
        ),
      );
    } catch (_) {
      rethrow;
    }
  }

  void _saveUser(userJson, {bool isReactive = false}) {
    _authRepo.saveUserInfo(userJson);
    if (isReactive) {
      notifyListeners();
    }
  }
}
