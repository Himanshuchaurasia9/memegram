import 'package:flutter/material.dart';
import 'package:meme_app/screens/home_screen.dart';
import 'package:meme_app/screens/splash_screen.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.system,
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.light,
        colorSchemeSeed: Colors.deepPurple,
        fontFamily: 'Inter',
        textTheme: const TextTheme(
          bodyMedium: TextStyle(fontFamily: 'Inter'),
          titleMedium: TextStyle(fontFamily: 'Inter'),
          titleSmall: TextStyle(fontFamily: 'Inter'),
        ),
      ),
      darkTheme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        colorSchemeSeed: Colors.deepPurple,
        fontFamily: 'Inter', // Default font for the app
        textTheme: const TextTheme(
          bodyMedium: TextStyle(fontFamily: 'Inter'),
          titleMedium: TextStyle(fontFamily: 'Inter'),
          titleSmall: TextStyle(fontFamily: 'Inter'),
        ),
      ),
      home: SplashScreen(),
    );
  }
}
