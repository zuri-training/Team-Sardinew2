import 'package:flutter/material.dart';
import 'package:stacked_services/stacked_services.dart';

import '../app/app_config.locator.dart';
import '../constants/constants.dart' show SnackbarType;

class SnackbarHelper {
  static void setupSnackbarUi() {
    final service = locator<SnackbarService>();

    service.registerCustomSnackbarConfig(
      variant: SnackbarType.success,
      config: SnackbarConfig(
        backgroundColor: Colors.green,
        textColor: Colors.white,
        borderRadius: 8,
        margin: const EdgeInsets.symmetric(horizontal: 16),
        barBlur: 0.6,
        messageTextStyle: const TextStyle(
          color: Colors.white,
          fontSize: 14,
        ),
        snackPosition: SnackPosition.TOP,
        snackStyle: SnackStyle.FLOATING,
      ),
    );

    service.registerCustomSnackbarConfig(
      variant: SnackbarType.failure,
      config: SnackbarConfig(
        backgroundColor: Colors.red,
        textColor: Colors.white,
        borderRadius: 8,
        margin: const EdgeInsets.symmetric(horizontal: 16),
        barBlur: 0.6,
        messageTextStyle: const TextStyle(
          color: Colors.white,
          fontSize: 14,
        ),
        snackPosition: SnackPosition.TOP,
        snackStyle: SnackStyle.FLOATING,
      ),
    );
  }
}
