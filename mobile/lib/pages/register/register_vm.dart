import 'package:feedback_gen/app/app_config.router.dart';
import 'package:feedback_gen/util/validator.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../api/api_exceptions.dart';
import '../../app/app_config.locator.dart';
import '../../constants/constants.dart';
import '../../services/services.dart';
import 'register_view.form.dart';

class RegisterViewModel extends FormViewModel with ValidatorMixin {
  final _auth = locator<AuthService>();
  final _navigator = locator<NavigationService>();
  final _snackbar = locator<SnackbarService>();

  bool _termsAccepted = false;
  bool get termsAccepted => _termsAccepted;

  bool _passwordVisible = false;
  bool get passwordVisible => _passwordVisible;

  switchVisibility() {
    _passwordVisible = !_passwordVisible;
    notifyListeners();
  }

  void register() async {
    setBusy(true);
    if (isFormValid) {
      final response = await _auth.register(data: formValueMap);
      response.map(
        success: (value) {
          _snackbar
              .showCustomSnackBar(
                message: value.data,
                variant: SnackbarType.success,
              )!
              .then((_) => to(Routes.mainView));
        },
        failure: (value) {
          _snackbar.showCustomSnackBar(
            message:
                '${ApiExceptions.getErrorMessage(value.error.exception)}\n${value.error.error.message}',
            variant: SnackbarType.failure,
          );
        },
      );
      setBusy(false);
    }
  }

  void toggleAcceptTerms(bool value) {
    _termsAccepted = value;
    notifyListeners();
  }

  void to(String route) {
    _navigator.pushNamedAndRemoveUntil(route);
  }

  @override
  void setFormStatus() {
    if (hasName) {
      setNameValidationMessage(validateNull(nameValue!));
    }
    if (hasEmail) {
      setEmailValidationMessage(validateEmail(emailValue!));
    }

    // if (hasPhone) {
    //   setPhoneValidationMessage(validatePhone(phoneValue!));
    // }

    if (hasPassword) {
      setPasswordValidationMessage(validatePassword(passwordValue!));
    }
  }
}
