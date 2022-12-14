import 'package:dio/dio.dart';
import 'package:feedback_gen/api/api_response.dart';

class ApiUtil {
  static ApiResponse getApiResponse(Response res) {
    return ApiResponse(
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,
      data: res.data,
    );
  }
}
