import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../constants/colors.dart';
import '../../shared/custom_button.dart';
import '../create_form/create_form.dart';
import '../dashboard/dashboard.dart';
import '../login/login_view.dart';

class TopNavBar {
  final String title;
  const TopNavBar({required this.title});
}

const List<TopNavBar> topNavBar = <TopNavBar>[
  TopNavBar(title: 'Responses'),
  TopNavBar(title: 'Questions'),
  TopNavBar(title: 'Settings'),
];

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: topNavBar.length,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.white,
          centerTitle: true,
          title: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Text(
                'Cookery Form',
                style: TextStyle(
                  fontFamily: 'OpeSans',
                  fontSize: 20,
                  fontWeight: FontWeight.w900,
                  color: AppColors.kSecondary,
                ),
              ),
              SizedBox(
                width: 10,
              ),
              Icon(CupertinoIcons.star)
            ],
          ),
          bottom: const TabBar(
            labelColor: AppColors.kPrimary,
            indicatorColor: AppColors.kBrown,
            labelStyle: TextStyle(
              color: AppColors.kTile,
              fontWeight: FontWeight.w600,
            ),
            tabs: [
              Tab(
                text: 'Responses',
              ),
              Tab(
                text: 'Questions',
              ),
              Tab(
                text: 'Settings',
              ),
            ],
          ),
          actions: const [
            Padding(
              padding: EdgeInsets.all(8.0),
              child: CircleAvatar(
                backgroundImage: AssetImage('assets/images/jane.jpg'),
              ),
            )
          ],
          elevation: 0,
          iconTheme: const IconThemeData(color: Colors.black),
          // backgroundColor: const Color.fromARGB(255, 255, 255, 255),
        ),
        drawer: const SideDrawer(),
        body: const TabBarView(children: [
          ResponseTabPage(),
          Center(child: Text('Questions')),
          SettingsTabPage(),
        ]),
      ),
    );
  }
}

class SettingsTabPage extends StatefulWidget {
  const SettingsTabPage({
    Key? key,
  }) : super(key: key);

  @override
  State<SettingsTabPage> createState() => _SettingsTabPageState();
}

class _SettingsTabPageState extends State<SettingsTabPage> {
  bool isSwitched = false;
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Color.fromARGB(255, 241, 233, 223),
      ),
      child: SingleChildScrollView(
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.start
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Card(
              child: SingleChildScrollView(
                  child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Padding(
                    padding: EdgeInsets.all(12.0),
                    child: Text(
                      'Settings',
                      style: TextStyle(
                        fontFamily: 'OpenSansBold',
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),
                    ),
                  ),
                  const Divider(),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12.0),
                    child: Text(
                      'Make this a quiz',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ),
                  ListTile(
                    contentPadding: const EdgeInsets.symmetric(horizontal: 12),
                    title: const Text(
                        'Assign point values, set answers, and automatically provide feedback'),
                    trailing: Switch(
                      value: false,
                      onChanged: (value) {
                        setState(() {
                          isSwitched = value;
                        });
                      },
                    ),
                  ),
                  const Divider(),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12.0),
                    child: Text(
                      'Responses',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ),
                  const ListTile(
                    contentPadding: EdgeInsets.symmetric(horizontal: 12),
                    title: Text(
                        'Manage how responses are collected and protected'),
                    trailing: Icon(CupertinoIcons.chevron_down),
                  ),
                  const Divider(),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12.0),
                    child: Text(
                      'Presentation',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ),
                  const ListTile(
                    contentPadding: EdgeInsets.symmetric(horizontal: 12),
                    title: Text(
                        'Manage how the form and responses are presented '),
                    trailing: Icon(CupertinoIcons.chevron_down),
                  ),
                ],
              )),
            ),
            Card(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Padding(
                    padding: EdgeInsets.all(12.0),
                    child: Text(
                      'Defaults',
                      style: TextStyle(
                        fontFamily: 'OpenSansMedium',
                        fontSize: 18,
                      ),
                    ),
                  ),
                  Divider(),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12.0),
                    child: Text(
                      'Form  defaults',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ),
                  ListTile(
                    title: Text('Settings applied to this form and new forms '),
                    trailing: Icon(CupertinoIcons.chevron_down),
                  ),
                  Divider(),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12.0),
                    child: Text(
                      'Question  defaults',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ),
                  ListTile(
                    contentPadding: EdgeInsets.symmetric(horizontal: 12),
                    title: Text('Settings applied to all new  questions '),
                    trailing: Icon(CupertinoIcons.chevron_down),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ResponseTabPage extends StatelessWidget {
  const ResponseTabPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
          // crossAxisAlignment: CrossAxisAlignment.center,
          // mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: Row(
                // crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const ResponseSmallCard(
                    text1: 'Total Response',
                    text2: '3',
                    icon: CupertinoIcons.group,
                  ),
                  const ResponseSmallCard(
                    text1: 'Total views',
                    text2: '20',
                    icon: CupertinoIcons.eye,
                  ),
                  SizedBox(
                    height: MediaQuery.of(context).size.height * 0.25,
                  ),
                ],
              ),
            ),
            const ResponseMediumCard(
              title: 'Participant Name',
              text1: 'Faith Afeme',
              text2: 'Evy Evie',
              text3: 'Fav Airfay',
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.05,
            ),
            const ResponseMediumCard(
              title: 'Gender',
              text1: 'Female',
              text2: 'Female',
              text3: 'Others',
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.05,
            ),
            const ResponseMediumCard(
              title: 'What Recipe Would You like to Learn?',
              text1: 'French Fries and Breakfast Burritos',
              text2: 'Itallian Pizza',
              text3: 'Oatmeal Cookies',
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.05,
            ),
            const ResponseMediumCard(
              title: 'How did you hear about us?',
              text1: 'Social media',
              text2: 'Friend/Colleague',
              text3: 'Poster/Magasine',
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.08,
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width * 0.6,
              child: CustomButton(onTap: () {}, text: 'Print Response'),
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.08,
            ),
          ]),
    );
  }
}

class ResponseMediumCard extends StatelessWidget {
  final String title;
  final String text1;
  final String text2;
  final String text3;

  const ResponseMediumCard({
    super.key,
    required this.title,
    required this.text1,
    required this.text2,
    required this.text3,
  });
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
          elevation: 2,
          child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
              ),
              width: MediaQuery.of(context).size.width * 0.85,
              padding: const EdgeInsets.all(20),
              // height: 40,
              // width: 40,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                // mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Text(
                    title,
                    softWrap: true,
                    style: const TextStyle(
                      fontFamily: 'OpenSansBold',
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  SizedBox(
                      child: Column(
                    children: [
                      Row(
                        children: [
                          const Icon(
                            CupertinoIcons.circle_fill,
                            size: 6,
                          ),
                          const SizedBox(
                            width: 5,
                          ),
                          Text(
                            text1,
                            style: const TextStyle(
                              fontFamily: 'OpenSansLight',
                              fontSize: 16,
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          const Icon(
                            CupertinoIcons.circle_fill,
                            size: 6,
                          ),
                          const SizedBox(
                            width: 5,
                          ),
                          Text(
                            text2,
                            style: const TextStyle(
                              fontFamily: 'OpenSansLight',
                              fontSize: 16,
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          const Icon(
                            CupertinoIcons.circle_fill,
                            size: 6,
                          ),
                          const SizedBox(
                            width: 5,
                          ),
                          Text(
                            text3,
                            style: const TextStyle(
                              fontFamily: 'OpenSansLight',
                              fontSize: 16,
                            ),
                          ),
                        ],
                      ),
                    ],
                  )
                      //  ListView(
                      //   itemExtent: 30,
                      //   shrinkWrap: true, padding: EdgeInsets.zero,
                      //   // crossAxisAlignment: CrossAxisAlignment.start,
                      //   children: const [
                      //     ListTile(
                      //       contentPadding: EdgeInsets.zero,
                      //       leading: Icon(
                      //         CupertinoIcons.circle_fill,
                      //         size: 8,

                      //       ),
                      //       title: Text('Faith Afeme'),
                      //     ),
                      //     ListTile(
                      //       contentPadding: EdgeInsets.zero,
                      //       leading: Icon(
                      //         CupertinoIcons.circle_fill,
                      //         size: 8,
                      //       ),
                      //       title: Text('Faith Afeme'),
                      //     ),
                      //     ListTile(
                      //       contentPadding: EdgeInsets.zero,
                      //       leading: Icon(
                      //         CupertinoIcons.circle_fill,
                      //         size: 8,
                      //       ),
                      //       title: Text('Faith Afeme'),
                      //     ),
                      //   ],
                      // ),
                      )
                ],
              ))),
    );
  }
}

class ResponseSmallCard extends StatelessWidget {
  final String text1;
  final String text2;
  final IconData icon;

  const ResponseSmallCard(
      {super.key,
      required this.text1,
      required this.text2,
      required this.icon});

  @override
  Widget build(BuildContext context) {
    return Card(
        elevation: 2,
        child: Container(
          padding: const EdgeInsets.all(20),
          // height: 40,
          // width: 40,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text(text1),
                  const SizedBox(
                    width: 5,
                  ),
                  Icon(
                    icon,
                    color: AppColors.kTertiary,
                  ),
                ],
              ),
              Text(
                text2,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20,
                ),
              )
            ],
          ),
        ));
  }
}

class SideDrawer extends StatelessWidget {
  const SideDrawer({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: AppColors.kSecondary,
      child: ListView(
        children: [
          ListTile(
            leading: const CircleAvatar(
              backgroundColor: Colors.transparent,
              backgroundImage: AssetImage('assets/images/feedback_logo.png'),
            ),
            title: const Text(
              'Feedbacker',
              style: TextStyle(fontSize: 30, color: AppColors.kPrimary),
            ),
            onTap: () {},
          ),
          ListTile(
            minLeadingWidth: 1,
            // horizontalTitleGap: 6,

            leading: const Icon(
              CupertinoIcons.rectangle_grid_2x2_fill,
              color: Color.fromARGB(255, 243, 238, 238),
            ),
            title: const Text(
              'Dashboard',
              style: TextStyle(
                color: Color.fromARGB(255, 243, 238, 238),
              ),
            ),
            onTap: (() {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (BuildContext context) => const DashBoardScreen(),
                ),
              );
            }),
          ),
          ListTile(
            minLeadingWidth: 1,
            // horizontalTitleGap: 6,

            leading: const Icon(
              CupertinoIcons.qrcode,
              color: Color.fromARGB(255, 243, 238, 238),
            ),
            title: const Text(
              'Create Form',
              style: TextStyle(
                  color: Color.fromARGB(255, 243, 238, 238),
                  fontFamily: 'OpenSans'),
            ),
            onTap: (() {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (BuildContext context) => const CreateForm(),
                ),
              );
            }),
          ),
          ListTile(
            minLeadingWidth: 1,
            // horizontalTitleGap: 6,

            leading: const Icon(
              CupertinoIcons.chart_bar,
              color: Color.fromARGB(255, 243, 238, 238),
            ),
            title: const Text(
              'Overview',
              style: TextStyle(
                color: Color.fromARGB(255, 243, 238, 238),
              ),
            ),
            onTap: () {},
          ),
          ListTile(
            minLeadingWidth: 1,
            // horizontalTitleGap: 6,

            leading: const Icon(
              CupertinoIcons.settings,
              color: Color.fromARGB(255, 243, 238, 238),
            ),
            title: const Text(
              'Settings',
              style: TextStyle(
                color: Color.fromARGB(255, 243, 238, 238),
              ),
            ),
            onTap: (() {}),
          ),
          SizedBox(
            height: MediaQuery.of(context).size.width * 0.8,
          ),
          Card(
            child: ListTile(
                onTap: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(
                      builder: (BuildContext context) => LoginView(),
                    ),
                  );
                },
                leading: const Icon(Icons.login_outlined),
                title: const Text(
                  'Log Out',
                  style: TextStyle(fontFamily: 'OpenSans'),
                )),
          ),
          // )
        ],
      ),
    );
  }
}
