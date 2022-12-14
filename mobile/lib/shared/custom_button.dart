import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:gap/gap.dart';
import '../constants/constants.dart' show AppColors;
import 'custom_text.dart';

class CustomButton extends StatelessWidget {
  final Function() onTap;
  final String text;
  final String? icon;
  final bool absorbing;
  final bool isOutline;
  final Color? color;
  final bool isBusy;
  const CustomButton({
    Key? key,
    required this.onTap,
    required this.text,
    this.absorbing = false,
    this.isBusy = false,
    this.color,
  })  : isOutline = false,
        icon = null,
        super(key: key);

  const CustomButton.outline({
    Key? key,
    required this.text,
    required this.icon,
    required this.onTap,
    this.isBusy = false,
    this.absorbing = false,
  })  : isOutline = true,
        color = null,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return AbsorbPointer(
      absorbing: isBusy,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8.r),
        child: Container(
          height: isBusy ? null : 53.h,
          alignment: Alignment.center,
          padding: EdgeInsets.symmetric(vertical: isBusy ? 5.h : 16.h),
          decoration: BoxDecoration(
            color: isOutline
                ? Colors.transparent
                : absorbing
                    ? color != null
                        ? color!.withOpacity(.5)
                        : AppColors.kBrown.withOpacity(.5)
                    : color ?? AppColors.kBrown,
            borderRadius: BorderRadius.circular(8.r),
            border: isOutline ? Border.all(color: AppColors.kBorder) : null,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (isOutline)
                SizedBox(
                  height: 30.h,
                  width: 30.w,
                  child: SvgPicture.asset(icon!),
                ),
              if (isOutline) Gap(10.w),
              (isBusy && !isOutline)
                  ? const CircularProgressIndicator(
                      color: Colors.white,
                    )
                  : CustomText(
                      text: text,
                      color: color != null ? Colors.white : AppColors.kPrimary,
                      size: 14.sp,
                    ),
            ],
          ),
        ),
      ),
    );
  }
}
