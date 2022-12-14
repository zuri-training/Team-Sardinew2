import 'dart:io';

import 'package:dio/dio.dart';
// ignore: depend_on_referenced_packages
import 'package:freezed_annotation/freezed_annotation.dart';

part 'api_exceptions.freezed.dart';

@freezed
class ApiExceptions with _$ApiExceptions {
  const factory ApiExceptions.requestCancelled() = RequestCancelled;

  const factory ApiExceptions.unauthorisedRequest() = UnauthorisedRequest;

  const factory ApiExceptions.badRequest() = BadRequest;

  const factory ApiExceptions.notFound(String reason) = NotFound;

  const factory ApiExceptions.methodNotAllowed() = MethodNotAllowed;

  const factory ApiExceptions.notAcceptable() = NotAcceptable;

  const factory ApiExceptions.requestTimeout() = RequestTimeout;

  const factory ApiExceptions.sendTimeout() = SendTimeout;

  const factory ApiExceptions.conflict() = Conflict;

  const factory ApiExceptions.internalServerError() = InternalServerError;

  const factory ApiExceptions.notImplemented() = NotImplemented;

  const factory ApiExceptions.serviceUnavailable() = ServiceUnavailable;

  const factory ApiExceptions.noInternetConnection() = NoInternetConnection;

  const factory ApiExceptions.formatException() = FormatException;

  const factory ApiExceptions.unableToProcess() = UnableToProcess;

  const factory ApiExceptions.defaultError(String error) = DefaultError;

  const factory ApiExceptions.unexpectedError() = UnexpectedError;

  static ApiExceptions getDioException(error) {
    if (error is Exception) {
      try {
        ApiExceptions apiException;
        if (error is DioError) {
          switch (error.type) {
            case DioErrorType.cancel:
              apiException = const ApiExceptions.requestCancelled();
              break;
            case DioErrorType.connectTimeout:
              apiException = const ApiExceptions.requestTimeout();
              break;
            case DioErrorType.other:
              apiException = const ApiExceptions.noInternetConnection();
              break;
            case DioErrorType.receiveTimeout:
              apiException = const ApiExceptions.requestTimeout();
              break;
            case DioErrorType.response:
              switch (error.response!.statusCode) {
                case 400:
                  apiException = const ApiExceptions.unauthorisedRequest();
                  break;
                case 401:
                  apiException = const ApiExceptions.unauthorisedRequest();
                  break;
                case 403:
                  apiException = const ApiExceptions.unauthorisedRequest();
                  break;
                case 404:
                  apiException = ApiExceptions.notFound(error.message);
                  break;
                case 409:
                  apiException = const ApiExceptions.conflict();
                  break;
                case 408:
                  apiException = const ApiExceptions.requestTimeout();
                  break;
                case 500:
                  apiException = const ApiExceptions.internalServerError();
                  break;
                case 503:
                  apiException = const ApiExceptions.serviceUnavailable();
                  break;
                default:
                  var responseCode = error.response!.statusCode;
                  apiException = ApiExceptions.defaultError(
                    "Received invalid status code: $responseCode",
                  );
              }
              break;
            case DioErrorType.sendTimeout:
              apiException = const ApiExceptions.sendTimeout();
              break;
          }
        } else if (error is SocketException) {
          apiException = const ApiExceptions.noInternetConnection();
        } else {
          apiException = const ApiExceptions.unexpectedError();
        }
        return apiException;
      } on FormatException {
        return const ApiExceptions.formatException();
      } catch (_) {
        return const ApiExceptions.unexpectedError();
      }
    } else {
      if (error.toString().contains("is not a subtype of")) {
        return const ApiExceptions.unableToProcess();
      } else {
        return const ApiExceptions.unexpectedError();
      }
    }
  }

  static String getErrorMessage(ApiExceptions apiExceptions) {
    var errorMessage = "";
    apiExceptions.when(
      notImplemented: () {
        errorMessage = "Not Implemented";
      },
      requestCancelled: () {
        errorMessage = "Request Cancelled";
      },
      internalServerError: () {
        errorMessage = "Internal Server Error";
      },
      notFound: (String reason) {
        errorMessage = reason;
      },
      serviceUnavailable: () {
        errorMessage = "Service unavailable";
      },
      methodNotAllowed: () {
        errorMessage = "Method Allowed";
      },
      badRequest: () {
        errorMessage = "Bad request";
      },
      unauthorisedRequest: () {
        errorMessage = "Unauthorised request";
      },
      unexpectedError: () {
        errorMessage = "Unexpected error occurred";
      },
      requestTimeout: () {
        errorMessage = "Connection request timeout";
      },
      noInternetConnection: () {
        errorMessage = "No internet connection";
      },
      conflict: () {
        errorMessage = "Error due to a conflict";
      },
      sendTimeout: () {
        errorMessage = "Send timeout in connection with API server";
      },
      unableToProcess: () {
        errorMessage = "Unable to process the data";
      },
      defaultError: (String error) {
        errorMessage = error;
      },
      formatException: () {
        errorMessage = "Unexpected error occurred";
      },
      notAcceptable: () {
        errorMessage = "Not acceptable";
      },
    );
    return errorMessage;
  }
}
