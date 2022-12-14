import 'package:feedback_gen/constants/enums.dart';
import 'package:feedback_gen/util/utils.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../api/api_exceptions.dart';
import '../../app/app_config.locator.dart';
import '../../models/user.dart';
import '../../services/auth_service.dart';
import 'change_password_view.form.dart';

class ChangePasswordViewModel extends FormViewModel with ValidatorMixin {
  final _auth = locator<AuthService>();
  final _snackbar = locator<SnackbarService>();

  late User _user;
  User get user => _user;

  void init() {
    _user = _auth.user!;
  }

  void resetPassword() async {
    setBusy(true);
    if (isFormValid) {
      final response = await _auth.resetPassword(
        data: {PasswordValueKey: passwordValue},
        resetType: PasswordResetType.change,
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
    if (hasPassword) {
      setPasswordValidationMessage(validatePassword(passwordValue!));
    }
    if (hasConfirmPassword) {
      setConfirmPasswordValidationMessage(
        validateConfirmPassword(confirmPasswordValue, passwordValue),
      );
    }
  }
}
