import '../../api/api_exceptions.dart';
import '../../app/app_config.router.dart';
import '../../constants/constants.dart' show SnackbarType;
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_config.locator.dart';
import '../../services/services.dart' show AuthService;

import '../../util/utils.dart' show ValidatorMixin;
import 'package:stacked/stacked.dart';
import 'login_view.form.dart';

class LoginViewModel extends FormViewModel with ValidatorMixin {
  final _auth = locator<AuthService>();
  final _navigator = locator<NavigationService>();
  final _snackbar = locator<SnackbarService>();

  bool _rememberMe = false;
  bool get rememberMe => _rememberMe;

  bool _passwordVisible = false;
  bool get passwordVisible => _passwordVisible;

  switchVisibility() {
    _passwordVisible = !_passwordVisible;
    notifyListeners();
  }

  void login() async {
    setBusy(true);
    if (isFormValid) {
      final response = await _auth.login(data: formValueMap);
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

  void to(String route, {bool pop = true}) {
    if (pop) {
      _navigator.pushNamedAndRemoveUntil(route);
    } else {
      _navigator.navigateTo(route);
    }
  }

  void toggleRememberMe(bool value) {
    _rememberMe = value;
    notifyListeners();
  }

  @override
  void setFormStatus() {
    if (hasEmail) {
      setEmailValidationMessage(validateEmail(emailValue!));
    }
    if (hasPassword) {
      setPasswordValidationMessage(validateNull(passwordValue!));
    }
  }
}
