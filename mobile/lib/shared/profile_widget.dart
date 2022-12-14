import 'package:flutter/cupertino.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';

import '../constants/constants.dart';
import 'custom_text.dart';

class ProfileWidget extends StatelessWidget {
  const ProfileWidget({
    Key? key,
    required this.name,
    required this.id,
  }) : super(key: key);
  final String name;
  final String id;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          height: 150.h,
          width: 150.h,
          decoration: BoxDecoration(
            color: AppColors.kPrimary1.withOpacity(.3),
            shape: BoxShape.circle,
          ),
          child: Icon(
            CupertinoIcons.person,
            size: 75.h,
            color: AppColors.kPrimary1,
          ),
        ),
        Gap(13.h),
        CustomText(
          text: name,
          size: 28.sp,
          color: AppColors.kSecondary1,
          weight: FontWeight.w600,
        ),
        Gap(6.h),
        CustomText(
          text: 'ID: $id',
          color: AppColors.kSecondary1,
        ),
        Gap(16.h),
      ],
    );
  }
}
