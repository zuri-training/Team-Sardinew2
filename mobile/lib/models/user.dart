class User {
  String? id;
  String? name;
  String? email;

  User({
    required this.id,
    required this.name,
    required this.email,
  });

  User.fromJson(Map<String, dynamic> json) {
    id = json['_id'];
    name = json['name'];
    email = json['email'];
  }

  Map<String, dynamic> toJson() {
    return {
      '_id': id,
      'name': name,
      'email': email,
    };
  }

  Map<String, dynamic> toJsonWithoutId() {
    return {
      'name': name,
      'email': email,
    };
  }
}
