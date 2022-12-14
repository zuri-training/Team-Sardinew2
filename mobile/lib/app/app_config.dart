import 'package:feedback_gen/api/api_client.dart';
import 'package:feedback_gen/api/dio_client.dart';
import 'package:feedback_gen/pages/change_password/change_password_view.dart';
import 'package:feedback_gen/pages/forgot_password/forgot_password_view.dart';
import 'package:feedback_gen/pages/login/login_view.dart';
import 'package:feedback_gen/pages/main/main_view.dart';
import 'package:feedback_gen/pages/edit_profile/edit_profile_view.dart';
import 'package:feedback_gen/pages/profile/profile_view.dart';
import 'package:feedback_gen/pages/profile/profile_vm.dart';
import 'package:feedback_gen/pages/register/register_view.dart';
import 'package:feedback_gen/pages/splash/splash_view.dart';
import 'package:stacked/stacked_annotations.dart';
import 'package:stacked_services/stacked_services.dart';
import '../repositories/repositories.dart';
import '../services/services.dart';

@StackedApp(
  routes: [
    MaterialRoute(page: SplashView, initial: true),
    MaterialRoute(page: LoginView),
    MaterialRoute(page: RegisterView),
    MaterialRoute(page: MainView),
    MaterialRoute(page: ProfileView),
    MaterialRoute(page: EditProfileView),
    MaterialRoute(page: ChangePasswordView),
    MaterialRoute(page: ForgotPasswordView)
  ],
  dependencies: [
    LazySingleton(classType: DioClient, asType: ApiClient),
    LazySingleton(classType: AuthRepository),
    LazySingleton(classType: AuthService),
    LazySingleton(classType: SnackbarService),
    LazySingleton(classType: NavigationService),
    LazySingleton(classType: ProfileViewModel),
    Presolve(
      classType: StorageService,
      presolveUsing: StorageService.getInstance,
    )
  ],
  logger: StackedLogger(),
)
class AppConfig {}
