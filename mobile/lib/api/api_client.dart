import 'api_response.dart';

abstract class ApiClient {
  Future<ApiResponse> fetch(String path, {String? token});
  Future<ApiResponse> post(
    String path, {
    required Map<String, dynamic> body,
    String? token,
  });
  Future<ApiResponse> put(
    String path, {
    required Map<String, dynamic> body,
    required String token,
  });
}
