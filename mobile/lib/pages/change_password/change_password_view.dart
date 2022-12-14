import 'change_password_vm.dart';
import 'package:feedback_gen/shared/shared.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked/stacked_annotations.dart';
import '../../constants/constants.dart';
import 'change_password_view.form.dart';

@FormView(
  fields: [
    FormTextField(name: 'password'),
    FormTextField(name: 'confirmPassword'),
  ],
)
class ChangePasswordView extends StatelessWidget with $ChangePasswordView {
  ChangePasswordView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<ChangePasswordViewModel>.reactive(
      viewModelBuilder: () => ChangePasswordViewModel(),
      onModelReady: (model) {
        model.init();
        listenToFormUpdated(model);
      },
      onDispose: (_) => disposeForm(),
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.transparent,
          leading: const BackButton(color: AppColors.kPrimary1),
          systemOverlayStyle: const SystemUiOverlayStyle(
            statusBarIconBrightness: Brightness.dark,
          ),
          title: CustomText(
            text: Strings.changePassword,
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
                          const CustomText(text: Strings.newPassword),
                          Gap(4.h),
                          CustomTextField(
                            controller: passwordController,
                            focusNode: passwordFocusNode,
                            hint: '${Strings.enter} ${Strings.newPassword}',
                          ),
                          if (model.hasPasswordValidationMessage)
                            ErrorText(
                              errorText: model.passwordValidationMessage!,
                            ),
                          Gap(17.h),
                          const CustomText(text: Strings.confirmPassword),
                          Gap(4.h),
                          CustomTextField(
                            controller: confirmPasswordController,
                            focusNode: confirmPasswordFocusNode,
                            action: TextInputAction.done,
                            hint:
                                '${Strings.enterAgain} ${Strings.newPassword}',
                          ),
                          if (model.hasConfirmPasswordValidationMessage)
                            ErrorText(
                              errorText:
                                  model.confirmPasswordValidationMessage!,
                            ),
                          Gap(40.h),
                          ValueListenableBuilder<TextEditingValue>(
                            valueListenable: passwordController,
                            builder: (context, newPassword, child) =>
                                ValueListenableBuilder<TextEditingValue>(
                              valueListenable: confirmPasswordController,
                              builder: (context, confirmPassword, child) =>
                                  CustomButton(
                                isBusy: model.isBusy,
                                onTap: model.resetPassword,
                                color: AppColors.kPrimary1,
                                absorbing: newPassword.text.isEmpty ||
                                    confirmPassword.text.isEmpty,
                                text: Strings.save,
                              ),
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
