import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'custom_text.dart';

class ErrorText extends StatelessWidget {
  const ErrorText({
    Key? key,
    required this.errorText,
  }) : super(key: key);

  final String? errorText;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: 5.h),
        CustomText(
          text: errorText!,
          maxLines: 2,
          color: Theme.of(context).errorColor,
        )
      ],
    );
  }
}
