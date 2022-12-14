import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../constants/constants.dart';

class TermsAndAgreement extends StatelessWidget {
  const TermsAndAgreement({
    Key? key,
    this.toggleTandA,
    required this.termsAccepted,
  }) : super(key: key);
  final Function(bool?)? toggleTandA;
  final bool termsAccepted;
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Checkbox(
          splashRadius: 0,
          checkColor: Colors.white,
          activeColor: AppColors.kBrown,
          value: termsAccepted,
          onChanged: toggleTandA,
          side: const BorderSide(
            color: AppColors.kPrimary,
            width: .5,
          ),
        ),
        Flexible(
          child: Text.rich(
            TextSpan(
              children: [
                TextSpan(
                  text: Strings.acceptTandC,
                  style: TextStyle(
                    color: AppColors.kPrimary,
                    fontSize: 12.sp,
                  ),
                ),
                TextSpan(
                  text: ' ${Strings.useAgreement}',
                  style: TextStyle(
                    color: AppColors.kBrown,
                    fontSize: 12.sp,
                  ),
                  recognizer: TapGestureRecognizer()..onTap = () {},
                ),
                TextSpan(
                  text: ' ${Strings.and} ',
                  style: TextStyle(
                    color: AppColors.kPrimary,
                    fontSize: 12.sp,
                  ),
                ),
                TextSpan(
                  text: Strings.privacyPolicy,
                  style: TextStyle(
                    color: AppColors.kBrown,
                    fontSize: 12.sp,
                  ),
                  recognizer: TapGestureRecognizer()..onTap = () {},
                )
              ],
            ),
          ),
        )
      ],
    );
  }
}
