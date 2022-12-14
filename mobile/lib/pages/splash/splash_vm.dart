import 'package:feedback_gen/app/app_config.locator.dart';
import 'package:feedback_gen/services/auth_service.dart';

import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_config.router.dart';

class SplashViewModel extends BaseViewModel {
  final _auth = locator<AuthService>();
  final _navigator = locator<NavigationService>();

  void init() {
    Future.delayed(
      const Duration(seconds: 2),
      () {
        if (_auth.userAuthenticated) {
          _auth.loadUserDetails();
          _to(Routes.mainView);
        } else {
          _to(Routes.loginView);
        }
      },
    );
  }

  void _to(String route) {
    _navigator.pushNamedAndRemoveUntil(route);
  }
}
