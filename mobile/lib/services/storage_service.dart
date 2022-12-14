import 'dart:convert';

// ignore: import_of_legacy_library_into_null_safe
import 'package:shared_preferences/shared_preferences.dart';

class StorageService {
  static StorageService? _instance;
  static SharedPreferences? _preferences;

  static Future<StorageService> getInstance() async {
    _instance ??= StorageService();

    _preferences ??= await SharedPreferences.getInstance();

    return _instance!;
  }

  Future setBool(String key, bool value) async {
    await _preferences?.setBool(key, value);
  }

  Future setString(String key, String value) async {
    await _preferences?.setString(key, value);
  }

  Future setInt(String key, num value) async {
    await _preferences?.setInt(key, value.toInt());
  }

  Future setDouble(String key, num value) async {
    return _preferences!.setDouble(key, value.toDouble());
  }

  Future setStringList(String key, List<String> value) async {
    await _preferences!.setStringList(key, value);
  }

  Future setMap(String key, Map map) async {
    String value = jsonEncode(map);
    await _preferences!.setString(key, value);
  }

  bool? getBool(String key) {
    return _preferences?.getBool(key);
  }

  bool? containsKey(String key) {
    return _preferences?.containsKey(key);
  }

  String? getString(String key) {
    return _preferences?.getString(key);
  }

  double? getDouble(String key) {
    return _preferences?.getDouble(key);
  }

  List<String>? getStringList(String key) {
    return _preferences?.getStringList(key);
  }

  Map<String, dynamic> getMap(String key) {
    String? value = _preferences?.getString(key);
    return jsonDecode(value.toString());
  }

  Future clear(String key) async {
    return await _preferences?.remove(key);
  }
}
