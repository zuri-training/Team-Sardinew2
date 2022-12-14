import '../constants/constants.dart' show AppColors;
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class CustomTextField extends StatelessWidget {
  final String hint;

  final TextEditingController? controller;
  final TextInputType? keyboard;
  final TextInputAction? action;
  final bool? obscureText;
  final Widget? suffixIcon;
  final FocusNode? focusNode;
  final bool enabled;
  final String? Function(String?)? validator;

  const CustomTextField({
    Key? key,
    required this.hint,
    this.controller,
    this.keyboard,
    this.action,
    this.obscureText,
    this.suffixIcon,
    this.focusNode,
    this.enabled = true,
    this.validator,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final outlineInputBorder = OutlineInputBorder(
      borderRadius: BorderRadius.circular(8.r),
      borderSide: const BorderSide(width: .5, color: AppColors.kBorder),
    );

    return TextFormField(
      style: TextStyle(color: AppColors.kPrimary, fontSize: 14.sp),
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: TextStyle(color: AppColors.kHint, fontSize: 14.sp),
        focusedBorder: outlineInputBorder,
        enabledBorder: outlineInputBorder,
        border: outlineInputBorder,
        suffixIcon: suffixIcon,
        errorBorder: outlineInputBorder.copyWith(
          borderSide: const BorderSide(color: Colors.red),
        ),
      ),
      autovalidateMode: AutovalidateMode.onUserInteraction,
      enabled: enabled,
      controller: controller,
      focusNode: focusNode,
      autocorrect: false,
      keyboardType: keyboard ?? TextInputType.text,
      textInputAction: action ?? TextInputAction.next,
      obscureText: obscureText ?? false,
      cursorColor: AppColors.kPrimary,
      validator: validator,
    );
  }
}
