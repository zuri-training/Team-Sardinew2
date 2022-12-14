import 'package:feedback_gen/app/app_config.router.dart';
import 'package:feedback_gen/constants/constants.dart';
import 'package:feedback_gen/pages/profile/profile_vm.dart';
import 'package:feedback_gen/shared/shared.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:gap/gap.dart';
import 'package:stacked/stacked.dart';

import 'profile_item.dart';

class ProfileView extends StatelessWidget {
  const ProfileView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<ProfileViewModel>.reactive(
      viewModelBuilder: () => ProfileViewModel(),
      onModelReady: (model) => model.init(),
      initialiseSpecialViewModelsOnce: true,
      fireOnModelReadyOnce: true,
      disposeViewModel: false,
      builder: (context, model, child) => SizedBox(
        key: const PageStorageKey('profile'),
        width: double.maxFinite,
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.w),
            child: Column(
              children: [
                Gap(59.h),
                ProfileWidget(
                  id: model.user.id!,
                  name: model.user.name!,
                ),
                SizedBox(
                  width: 112.w,
                  child: CustomButton(
                    onTap: () => model.to(Routes.editProfileView),
                    color: AppColors.kPrimary1,
                    text: Strings.editPorifle,
                  ),
                ),
                Gap(38.h),
                ProfileItem(
                  onTap: () {},
                  title: Strings.savedForms,
                  icon: Icons.archive_outlined,
                ),
                Gap(22.h),
                ProfileItem(
                  onTap: () {},
                  title: Strings.settings,
                  icon: Icons.settings_outlined,
                ),
                Gap(22.h),
                ProfileItem(
                  onTap: () => model.to(Routes.changePasswordView),
                  title: Strings.changePassword,
                  icon: Icons.lock_outline_rounded,
                ),
                Gap(22.h),
                ProfileItem(
                  onTap: () {},
                  title: Strings.support,
                  icon: Icons.call_outlined,
                  useTrailing: false,
                ),
                Gap(22.h),
                ProfileItem(
                  onTap: model.logout,
                  title: Strings.logout,
                  icon: Icons.logout_outlined,
                  useBorder: false,
                  useTrailing: false,
                ),
                Gap(38.h),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
