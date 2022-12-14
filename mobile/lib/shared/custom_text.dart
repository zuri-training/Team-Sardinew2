import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../constants/constants.dart' show AppColors;

class CustomText extends StatelessWidget {
  const CustomText({
    Key? key,
    required this.text,
    this.size,
    this.color,
    this.overflow,
    this.weight,
    this.maxLines,
  }) : super(key: key);
  final String text;
  final double? size;
  final Color? color;
  final TextOverflow? overflow;
  final FontWeight? weight;
  final int? maxLines;
  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      maxLines: maxLines,
      style: TextStyle(
        fontFamily: 'Inter',
        fontWeight: weight ?? FontWeight.w400,
        fontSize: size ?? 14.sp,
        color: color ?? AppColors.kPrimary,
        overflow: overflow ?? TextOverflow.ellipsis,
      ),
    );
  }
}
