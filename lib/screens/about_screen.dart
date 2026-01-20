import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  // Open URL in default browser
  void _launchURL(String url) async {
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(
        title: const Text('About'),
        backgroundColor: theme.scaffoldBackgroundColor,
        elevation: 0,
        iconTheme: theme.iconTheme,
        titleTextStyle: theme.textTheme.titleLarge?.copyWith(
          fontWeight: FontWeight.bold,
          fontSize: 22,
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 20),
            Image.asset('assets/logo.png', height: 120),
            const SizedBox(height: 20),
            const Text(
              'Memegram',
              style: TextStyle(
                fontFamily: 'Fredoka',
                fontSize: 28,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              'Your daily dose of memes 😎',
              style: TextStyle(
                fontSize: 16,
                fontStyle: FontStyle.italic,
                color: Colors.grey,
              ),
            ),
            const SizedBox(height: 40),

            // Credits
            ListTile(
              leading: const Icon(Icons.person),
              title: const Text('Developer'),
              subtitle: const Text('Himanshu Chaurasia'),
            ),
            ListTile(
              leading: const Icon(Icons.api),
              title: const Text('API Credit'),
              subtitle: const Text('Meme API by D3vd'),
              trailing: IconButton(
                icon: const Icon(Icons.open_in_new),
                onPressed: () {
                  _launchURL('https://github.com/D3vd/Meme_Api');
                },
              ),
            ),
            ListTile(
              leading: const Icon(Icons.code),
              title: const Text('GitHub Repository'),
              subtitle: const Text('Memegram App Source'),
              trailing: IconButton(
                icon: const Icon(Icons.open_in_new),
                onPressed: () {
                  _launchURL('https://github.com/Himanshuchaurasia9/memegram');
                },
              ),
            ),

            const Spacer(),
            const Text(
              'Enjoy your memes responsibly! 😄',
              style: TextStyle(
                fontSize: 14,
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              'v1.0.0',
              style: TextStyle(
                fontSize: 12,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
