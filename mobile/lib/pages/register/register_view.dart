import 'package:feedback_gen/app/app_config.router.dart';
import 'package:feedback_gen/pages/register/register_vm.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';
import 'package:stacked/stacked.dart';
import 'package:stacked/stacked_annotations.dart';
import '../../constants/constants.dart';
import '../../shared/shared.dart';
import '../../util/utils.dart';
import 'register_view.form.dart';

@FormView(
  fields: [
    FormTextField(name: 'name'),
    FormTextField(name: 'email'),
    // FormTextField(name: 'phone'),
    FormTextField(name: 'password')
  ],
)
class RegisterView extends StatelessWidget with $RegisterView {
  RegisterView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<RegisterViewModel>.reactive(
      viewModelBuilder: () => RegisterViewModel(),
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
                          const CustomText(text: Strings.fullName),
                          Gap(4.h),
                          CustomTextField(
                            controller: nameController,
                            focusNode: nameFocusNode,
                            hint: '${Strings.enter} ${Strings.fullName}',
                          ),
                          if (model.hasNameValidationMessage)
                            ErrorText(
                              errorText: model.nameValidationMessage!,
                            ),
                          Gap(17.h),
                          const CustomText(text: Strings.emailAddress),
                          Gap(4.h),
                          CustomTextField(
                            controller: emailController,
                            focusNode: emailFocusNode,
                            hint: '${Strings.enter} ${Strings.emailAddress}',
                          ),
                          if (model.hasEmailValidationMessage)
                            ErrorText(errorText: model.emailValidationMessage!),
                          // Gap(17.h),
                          // const CustomText(text: Strings.phoneNumber),
                          // Gap(4.h),
                          // CustomTextField(
                          //   controller: phoneController,
                          //   focusNode: phoneFocusNode,
                          //   hint: '${Strings.enter} ${Strings.phoneNumber}',
                          //   keyboard: const TextInputType.numberWithOptions(
                          //     signed: true,
                          //   ),
                          // ),
                          // if (model.hasPhoneValidationMessage)
                          //   ErrorText(errorText: model.phoneValidationMessage!),
                          Gap(17.h),
                          const CustomText(text: Strings.password),
                          Gap(4.h),
                          CustomTextField(
                            controller: passwordController,
                            focusNode: passwordFocusNode,
                            action: TextInputAction.done,
                            hint: '${Strings.enter} ${Strings.password}',
                            suffixIcon: IconButton(
                              onPressed: model.switchVisibility,
                              splashRadius: 10.r,
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
                          // Gap(12.h),
                          // Expanded(
                          //   child: _TermsAndAgreement(
                          //     termsAccepted: model.termsAccepted,
                          //     toggleTandA: (value) =>
                          //         model.toggleAcceptTerms(value!),
                          //   ),
                          // ),
                          Gap(40.h),
                          ValueListenableBuilder<TextEditingValue>(
                            valueListenable: nameController,
                            builder: (context, fullName, child) =>
                                ValueListenableBuilder<TextEditingValue>(
                              valueListenable: emailController,
                              builder: (context, email, child) =>
                                  ValueListenableBuilder<TextEditingValue>(
                                valueListenable: passwordController,
                                builder: (context, password, child) =>
                                    CustomButton(
                                  isBusy: model.isBusy,
                                  onTap: model.register,
                                  absorbing: fullName.text.isEmpty ||
                                      email.text.isEmpty ||
                                      password.text.isEmpty,
                                  text: Strings.signUp,
                                ),
                              ),
                            ),
                          ),
                          Gap(16.h),
                          GestureDetector(
                            onTap: () => model.to(Routes.loginView),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const CustomText(text: Strings.haveAccount),
                                Gap(5.w),
                                const CustomText(
                                  text: Strings.login,
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
