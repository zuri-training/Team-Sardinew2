class ApiResponse {
  final int? statusCode;
  final String? statusMessage;
  final Map<String, dynamic>? data;

  ApiResponse({
    required this.statusCode,
    required this.statusMessage,
    required this.data,
  });
}
