import 'package:dio/dio.dart';
import 'package:feedback_gen/api/api_client.dart';
import 'package:feedback_gen/api/api_util.dart';

import '../constants/constants.dart' show ApiConstants;
import 'api_response.dart';
import 'dio_interceptor.dart';

class DioClient implements ApiClient {
  final _dio = Dio();

  DioClient() {
    _dio.interceptors.add(DioInterceptor());
    _dio.options.sendTimeout = 30000;
    _dio.options.receiveTimeout = 30000;
    _dio.options.baseUrl = ApiConstants.baseUrl;
  }

  @override
  Future<ApiResponse> fetch(String path, {String? token}) async {
    try {
      final response = await _dio.get(
        path,
        options: token != null
            ? Options(headers: {'Authorization': 'Bearer $token'})
            : null,
      );
      return ApiUtil.getApiResponse(response);
    } catch (e) {
      rethrow;
    }
  }

  @override
  Future<ApiResponse> post(
    String path, {
    required Map<String, dynamic> body,
    String? token,
  }) async {
    try {
      final response = await _dio.post(
        path,
        data: body,
        options: token != null
            ? Options(headers: {'Authorization': 'Bearer $token'})
            : null,
      );
      return ApiUtil.getApiResponse(response);
    } catch (e) {
      rethrow;
    }
  }

  @override
  Future<ApiResponse> put(
    String path, {
    required Map<String, dynamic> body,
    required String token,
  }) async {
    try {
      final response = await _dio.put(
        path,
        data: body,
        options: Options(headers: {'Authorization': 'Bearer $token'}),
      );
      return ApiUtil.getApiResponse(response);
    } catch (e) {
      rethrow;
    }
  }
}
