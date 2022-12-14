import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';

import '../../constants/constants.dart';
import '../../shared/shared.dart';

class ProfileItem extends StatelessWidget {
  const ProfileItem({
    Key? key,
    required this.onTap,
    required this.title,
    required this.icon,
    this.useBorder = true,
    this.useTrailing = true,
  }) : super(key: key);

  final Function() onTap;
  final String title;
  final IconData icon;
  final bool useBorder;
  final bool useTrailing;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          Container(
            padding: useBorder ? EdgeInsets.only(bottom: 22.h) : null,
            child: Row(
              children: [
                Container(
                  height: 40.w,
                  width: 40.w,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: AppColors.kPrimary1.withOpacity(.3),
                    borderRadius: BorderRadius.circular(8.r),
                  ),
                  child: Icon(
                    icon,
                    color: AppColors.kSecondary1.withOpacity(.39),
                  ),
                ),
                Gap(20.w),
                CustomText(
                  text: title,
                  size: 16.sp,
                  weight: FontWeight.w500,
                ),
                if (useTrailing) const Spacer(),
                if (useTrailing)
                  const Icon(
                    Icons.arrow_forward_ios_rounded,
                    color: AppColors.kFadedGrey,
                  )
              ],
            ),
          ),
          if (useBorder)
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20.w),
              child: Divider(
                color: Colors.black.withOpacity(.3),
                height: 1.h,
              ),
            )
        ],
      ),
    );
  }
}
