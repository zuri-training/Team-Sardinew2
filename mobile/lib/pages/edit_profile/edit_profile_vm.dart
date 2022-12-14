import 'package:flutter/material.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked_services/stacked_services.dart';

import '../../api/api_exceptions.dart';
import '../../app/app_config.locator.dart';
import '../../constants/constants.dart';
import '../../models/user.dart';
import '../../services/auth_service.dart';

class EditProfileViewModel extends ReactiveViewModel {
  final _auth = locator<AuthService>();
  final _snackbar = locator<SnackbarService>();
  final _navigator = locator<NavigationService>();

  final _formKey = GlobalKey<FormState>();

  GlobalKey<FormState> get formKey => _formKey;
  final _nameController = TextEditingController();
  TextEditingController get nameController => _nameController;
  final _emailController = TextEditingController();
  TextEditingController get emailController => _emailController;

  late User _user;
  User get user => _user;
  bool _userUpdated = false;
  void init() {
    _user = _auth.user!;
    _emailController.text = _user.email!;
    _nameController.text = _user.name!;
  }

  void updatUserName() async {
    setBusy(true);
    if (formKey.currentState!.validate()) {
      final response = await _auth.updateUserName(
        user: User(
          id: _user.id,
          name: _nameController.text.trim(),
          email: _user.email,
        ),
      );
      response.map(
        success: (value) {
          _userUpdated = true;
          _snackbar
              .showCustomSnackBar(
            message: value.data,
            variant: SnackbarType.success,
          )!
              .then((_) {
            _user = _auth.user!;
            notifyListeners();
          });
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

  void back({result}) {
    if (_userUpdated) {
      _navigator.back(result: _auth.user);
    } else {
      _navigator.back();
    }
  }

  @override
  List<ReactiveServiceMixin> get reactiveServices => [_auth];
}
