import 'package:feedback_gen/shared/shared.dart';
import 'package:feedback_gen/util/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';
import 'package:stacked/stacked.dart';

import '../../constants/constants.dart';
import 'edit_profile_vm.dart';

class EditProfileView extends StatelessWidget with ValidatorMixin {
  const EditProfileView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<EditProfileViewModel>.reactive(
      viewModelBuilder: () => EditProfileViewModel(),
      onModelReady: (model) => model.init(),
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.transparent,
          leading:
              BackButton(onPressed: model.back, color: AppColors.kPrimary1),
          systemOverlayStyle: const SystemUiOverlayStyle(
            statusBarIconBrightness: Brightness.dark,
          ),
          title: CustomText(
            text: Strings.editPorifle,
            color: AppColors.kSecondary1,
            weight: FontWeight.w700,
            size: 20.sp,
          ),
        ),
        body: LayoutBuilder(
          builder: (context, constraints) {
            return SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  minWidth: constraints.maxWidth,
                  minHeight: constraints.maxHeight,
                ),
                child: IntrinsicHeight(
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 16.w),
                    child: Form(
                      key: model.formKey,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Gap(28.h),
                          SizedBox(
                            width: double.infinity,
                            child: ProfileWidget(
                              name: model.user.name!,
                              id: model.user.id!,
                            ),
                          ),
                          const CustomText(text: Strings.fullName),
                          Gap(4.h),
                          CustomTextField(
                            controller: model.nameController,
                            hint: '${Strings.enter} ${Strings.fullName}',
                            validator: (value) => validateNull(value),
                            action: TextInputAction.done,
                          ),
                          Gap(17.h),
                          const CustomText(text: Strings.emailAddress),
                          Gap(4.h),
                          CustomTextField(
                            enabled: false,
                            controller: model.emailController,
                            hint: '${Strings.enter} ${Strings.emailAddress}',
                          ),
                          Gap(40.h),
                          ValueListenableBuilder<TextEditingValue>(
                            valueListenable: model.nameController,
                            builder: (context, fullName, child) => CustomButton(
                              onTap: model.updatUserName,
                              isBusy: model.isBusy,
                              color: AppColors.kPrimary1,
                              absorbing: fullName.text.isEmpty,
                              text: Strings.save,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
