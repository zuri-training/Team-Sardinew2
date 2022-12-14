import 'package:feedback_gen/api/api_exceptions.dart';

class FailedResponse {
  final ApiExceptions exception;
  final ApiError error;

  FailedResponse({required this.exception, required this.error});
}

class ApiError {
  bool? success;
  String? message;
  ApiError.fromJson(Map<String, dynamic>? json) {
    if (json != null) {
      success = json['success'];
      message = json['message'];
    } else {
      success = false;
      message = '';
    }
  }
}
