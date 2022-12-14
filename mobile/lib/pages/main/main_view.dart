import 'package:feedback_gen/pages/profile/profile_view.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:stacked/stacked.dart';

import '../../constants/constants.dart' show AppColors, Strings;
import 'main_vm.dart';
import '../home/home_view.dart';

class MainView extends StatelessWidget {
  const MainView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<MainViewModel>.reactive(
      viewModelBuilder: () => MainViewModel(),
      builder: (context, model, child) => Scaffold(
        bottomNavigationBar: Container(
          decoration: BoxDecoration(
            boxShadow: [
              BoxShadow(
                blurRadius: 4.r,
                spreadRadius: 0,
                offset: const Offset(0, -2),
                color: Colors.black.withOpacity(.25),
              ),
            ],
          ),
          child: BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            currentIndex: model.currentIndex,
            onTap: model.setIndex,
            elevation: 0,
            backgroundColor: Theme.of(context).scaffoldBackgroundColor,
            selectedItemColor: AppColors.kPrimary1,
            unselectedItemColor: AppColors.kFadedGrey,
            items: const [
              BottomNavigationBarItem(
                icon: Icon(CupertinoIcons.home),
                label: Strings.home,
              ),
              BottomNavigationBarItem(
                icon: Icon(CupertinoIcons.settings),
                label: Strings.settings,
              ),
              BottomNavigationBarItem(
                icon: Icon(CupertinoIcons.bell),
                label: Strings.notifications,
              ),
              BottomNavigationBarItem(
                icon: Icon(CupertinoIcons.person),
                label: Strings.profile,
              ),
            ],
          ),
        ),
        body: getView(model.currentIndex),
      ),
    );
  }

  Widget getView(int index) {
    switch (index) {
      case 0:
        return const HomeView();
      case 1:
        return const SizedBox();
      case 2:
        return const SizedBox();
      case 3:
        return const ProfileView();
      default:
        return const SizedBox();
    }
  }
}
