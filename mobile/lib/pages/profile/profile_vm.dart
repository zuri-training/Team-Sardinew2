import 'package:feedback_gen/app/app_config.locator.dart';
import 'package:feedback_gen/services/auth_service.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../app/app_config.router.dart';
import '../../models/user.dart';

class ProfileViewModel extends BaseViewModel {
  final _auth = locator<AuthService>();
  final _navigator = locator<NavigationService>();

  late User _user;
  User get user => _user;

  void init() {
    _user = _auth.user!;
  }

  void logout() async {
    await _auth
        .logout()
        .then((_) => _navigator.pushNamedAndRemoveUntil(Routes.loginView));
  }

  void to(String route) {
    _navigator.navigateTo(route)!.then((value) {
      if (value != null) {
        _user = value;
        notifyListeners();
      }
    });
  }
}
