import 'package:feedback_gen/app/app_config.router.dart';
import 'package:feedback_gen/pages/login/login_vm.dart';
import 'package:feedback_gen/shared/shared.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked/stacked_annotations.dart';

import '../../constants/constants.dart';
import '../../util/utils.dart';
import 'login_view.form.dart';

@FormView(
  fields: [
    FormTextField(name: 'email'),
    FormTextField(name: 'password'),
  ],
)
class LoginView extends StatelessWidget with $LoginView {
  LoginView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<LoginViewModel>.reactive(
      viewModelBuilder: () => LoginViewModel(),
      onModelReady: (model) => listenToFormUpdated(model),
      onDispose: (_) => disposeForm(),
      builder: (context, model, child) => Scaffold(
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
                          Gap(75.h),
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
                          Gap(17.h),
                          const CustomText(text: Strings.password),
                          Gap(4.h),
                          CustomTextField(
                            controller: passwordController,
                            focusNode: passwordFocusNode,
                            action: TextInputAction.done,
                            obscureText: !model.passwordVisible,
                            hint: '${Strings.enter} ${Strings.password}',
                            suffixIcon: IconButton(
                              splashRadius: 10.r,
                              onPressed: model.switchVisibility,
                              icon: Icon(
                                model.passwordVisible
                                    ? Icons.visibility_off_outlined
                                    : Icons.visibility_outlined,
                                color: AppColors.kBorder,
                              ),
                            ),
                          ),
                          if (model.hasPasswordValidationMessage)
                            ErrorText(
                              errorText: model.passwordValidationMessage!,
                            ),
                          Gap(12.h),
                          Row(
                            children: [
                              Checkbox(
                                value: model.rememberMe,
                                splashRadius: 0,
                                activeColor: AppColors.kBrown,
                                checkColor: Colors.white,
                                onChanged: (value) =>
                                    model.toggleRememberMe(value!),
                                side: const BorderSide(
                                  color: AppColors.kPrimary,
                                  width: .5,
                                ),
                              ),
                              CustomText(text: Strings.rememberMe, size: 12.sp),
                              const Spacer(),
                              GestureDetector(
                                onTap: () => model.to(
                                  Routes.forgotPasswordView,
                                  pop: false,
                                ),
                                child: CustomText(
                                  text: Strings.forgottenPassword,
                                  size: 12.sp,
                                  color: AppColors.kBrown,
                                ),
                              ),
                            ],
                          ),
                          Gap(20.h),
                          ValueListenableBuilder<TextEditingValue>(
                            valueListenable: emailController,
                            builder: (context, emailValue, child) =>
                                ValueListenableBuilder<TextEditingValue>(
                              valueListenable: passwordController,
                              builder: (context, passwordValue, child) {
                                return CustomButton(
                                  onTap: model.login,
                                  isBusy: model.isBusy,
                                  absorbing: emailValue.text.isEmpty ||
                                      passwordValue.text.isEmpty,
                                  text: Strings.signIn,
                                );
                              },
                            ),
                          ),
                          Gap(16.h),
                          CustomButton.outline(
                            onTap: () {},
                            icon: AssetPath.google,
                            absorbing: model.isBusy,
                            text: Strings.signInWithGoogle,
                          ),
                          Gap(16.h),
                          GestureDetector(
                            onTap: () => model.to(Routes.registerView),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const CustomText(text: Strings.noAccount),
                                Gap(5.w),
                                const CustomText(
                                  text: Strings.createOne,
                                  color: AppColors.kBrown,
                                )
                              ],
                            ),
                          ),
                          const Spacer(),
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
