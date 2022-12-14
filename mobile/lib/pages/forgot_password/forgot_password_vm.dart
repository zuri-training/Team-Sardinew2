import 'package:feedback_gen/constants/enums.dart';
import 'package:feedback_gen/services/auth_service.dart';
import 'package:feedback_gen/util/utils.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../api/api_exceptions.dart';
import '../../app/app_config.locator.dart';
import 'forgot_password_view.form.dart';

class ForgotPasswordViewModel extends FormViewModel with ValidatorMixin {
  final _auth = locator<AuthService>();
  final _snackbar = locator<SnackbarService>();

  void resetPassword() async {
    setBusy(true);
    if (isFormValid) {
      final response = await _auth.resetPassword(
        data: formValueMap,
        resetType: PasswordResetType.forgot,
      );

      response.map(
        success: (value) {
          _snackbar.showCustomSnackBar(
            message: value.data,
            variant: SnackbarType.success,
          );
        },
        failure: (value) {
          _snackbar.showCustomSnackBar(
            message:
                '${ApiExceptions.getErrorMessage(value.error.exception)}\n${value.error.error.message}',
            variant: SnackbarType.failure,
          );
        },
      );
    }
    setBusy(false);
  }

  @override
  void setFormStatus() {
    if (hasEmail) {
      setEmailValidationMessage(validateEmail(emailValue!));
    }
  }
}
