import 'package:feedback_gen/pages/forgot_password/forgot_password_view.form.dart';
import 'package:feedback_gen/pages/forgot_password/forgot_password_vm.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked/stacked_annotations.dart';

import '../../constants/constants.dart';
import '../../shared/shared.dart';
import '../../util/utils.dart';

@FormView(fields: [FormTextField(name: 'email')])
class ForgotPasswordView extends StatelessWidget with $ForgotPasswordView {
  ForgotPasswordView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<ForgotPasswordViewModel>.reactive(
      viewModelBuilder: () => ForgotPasswordViewModel(),
      onModelReady: (model) => listenToFormUpdated(model),
      onDispose: (_) => disposeForm(),
      builder: (context, model, child) => Scaffold(
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.transparent,
          leading: const BackButton(color: AppColors.kPrimary),
          systemOverlayStyle: const SystemUiOverlayStyle(
            statusBarIconBrightness: Brightness.dark,
          ),
          title: CustomText(
            text: Strings.resetPassword,
            color: AppColors.kPrimary,
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
                    padding: EdgeInsets.all(16.w),
                    child: Form(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          CustomText(text: Helper.greeting()),
                          Gap(31.h),
                          const CustomText(text: Strings.emailAddress),
                          Gap(4.h),
                          CustomTextField(
                            controller: emailController,
                            focusNode: emailFocusNode,
                            hint: '${Strings.enter} ${Strings.emailAddress}',
                          ),
                          if (model.hasEmailValidationMessage)
                            ErrorText(errorText: model.emailValidationMessage!),
                          Gap(40.h),
                          ValueListenableBuilder<TextEditingValue>(
                            valueListenable: emailController,
                            builder: (context, emailValue, child) =>
                                CustomButton(
                              isBusy: model.isBusy,
                              onTap: model.resetPassword,
                              absorbing: emailValue.text.isEmpty,
                              text: Strings.resetPassword,
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
