mixin ValidatorMixin {
  static int inputLength = 6;

  String? validateEmail(String input) {
    if (_emailValidation(input)) {
      return null;
    } else if (input.isEmpty) {
      return 'Enter your email';
    } else {
      return 'Enter a valid email address';
    }
  }

  String? validatePassword(input) {
    if (_isPasswordValid(input)) {
      return null;
    } else if (input.isEmpty) {
      return 'Enter your password';
    } else {
      return 'Password should contain at least six characters';
    }
  }

  String? validateConfirmPassword(input, password) {
    if (input != password) {
      return 'Password does not match';
    }
    return null;
  }

  String? validatePhone(input) {
    if (_phoneValidation(input)) {
      return null;
    } else if (input.isEmpty) {
      return 'Enter your phone number';
    } else {
      return 'Phone number is invalid';
    }
  }

  String? validateNull(String? input) {
    if (input!.isEmpty) {
      return 'This field cannot be empty';
    } else {
      return null;
    }
  }

  bool _isPasswordValid(String password) {
    if (password.length < inputLength) {
      return false;
    }
    return true;
  }

  bool _emailValidation(String input) {
    if (RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_"
            r'`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+')
        .hasMatch(input)) {
      return true;
    } else {
      return false;
    }
  }

  bool _phoneValidation(String input) {
    if (RegExp(r'^(?:[+0][1-9])?[0-9]{10,12}$').hasMatch(input)) {
      return true;
    } else {
      return false;
    }
  }
}
