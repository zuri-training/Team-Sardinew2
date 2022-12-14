// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// StackedLocatorGenerator
// **************************************************************************

// ignore_for_file: public_member_api_docs, implementation_imports, depend_on_referenced_packages

import 'package:stacked_core/stacked_core.dart';
import 'package:stacked_services/src/navigation/navigation_service.dart';
import 'package:stacked_services/src/snackbar/snackbar_service.dart';

import '../api/api_client.dart';
import '../api/dio_client.dart';
import '../pages/profile/profile_vm.dart';
import '../repositories/auth_repository.dart';
import '../services/auth_service.dart';
import '../services/storage_service.dart';

final locator = StackedLocator.instance;

Future<void> setupLocator(
    {String? environment, EnvironmentFilter? environmentFilter}) async {
// Register environments
  locator.registerEnvironment(
      environment: environment, environmentFilter: environmentFilter);

// Register dependencies
  locator.registerLazySingleton<ApiClient>(() => DioClient());
  locator.registerLazySingleton(() => AuthRepository());
  locator.registerLazySingleton(() => AuthService());
  locator.registerLazySingleton(() => SnackbarService());
  locator.registerLazySingleton(() => NavigationService());
  locator.registerLazySingleton(() => ProfileViewModel());
  final storageService = await StorageService.getInstance();
  locator.registerSingleton(storageService);
}
