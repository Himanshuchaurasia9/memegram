import 'package:flutter/material.dart';
import 'package:meme_app/screens/about_screen.dart';
import 'package:meme_app/widgets/meme_card.dart';
import '../models/meme_model.dart';
import '../services/meme_service.dart';
import 'fullmeme_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Meme> memes = [];
  bool isLoading = true;

  // Bottom nav selected index
  int selectedIndex = 0;

  // Categories for bottom nav
  final List<String> categories = ['random', 'dankmemes', 'wholesomememes'];

  @override
  void initState() {
    super.initState();
    fetchMemes();
  }

  Future<void> fetchMemes() async {
    setState(() => isLoading = true);
    final fetchedMemes = await MemeService().fetchMemes(
      context,
      subreddit: categories[selectedIndex],
    );
    setState(() {
      memes = fetchedMemes ?? [];
      isLoading = false;
    });
  }

  void onTabTapped(int index) {
    if (selectedIndex == index) return; // Already selected
    setState(() {
      selectedIndex = index;
    });
    fetchMemes();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: theme.scaffoldBackgroundColor,
        elevation: 0,
        centerTitle: false,
        title: Row(
          children: [
            Image.asset('assets/logo.png', height: 35),
            Text(
              'MemeGram',
              style: TextStyle(
                fontFamily: 'Fredoka',
                fontSize: 22,
                fontWeight: FontWeight.bold,
                letterSpacing: 0.5,
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.info_outline),
            tooltip: 'About',
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const AboutScreen()),
              );
            },
          ),
        ],
      ),
      body: isLoading
          ? const Center(child: CircularProgressIndicator())
          : memes.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(
                    Icons.sentiment_dissatisfied,
                    size: 70,
                    color: Colors.grey,
                  ),
                  SizedBox(height: 12),
                  Text(
                    'No memes found!',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                  ),
                ],
              ),
            )
          : RefreshIndicator(
              onRefresh: fetchMemes,
              child: ListView.builder(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 8),
                itemCount: memes.length + 1, // extra item for end message
                itemBuilder: (context, index) {
                  if (index == memes.length) {
                    return Padding(
                      padding: const EdgeInsets.symmetric(
                        vertical: 40,
                        horizontal: 20,
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            '#LaughWithMemeGram',
                            style: TextStyle(
                              fontSize: 25,
                              fontWeight: FontWeight.w900,
                              color: Colors.grey[700],
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'With ❤️ from MemeGram',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.w500,
                              color: Colors.grey[500],
                            ),
                          ),
                        ],
                      ),
                    );
                  }

                  final meme = memes[index];
                  return GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => FullscreenMemeScreen(meme: meme),
                        ),
                      );
                    },
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 6),
                      child: MemeCard(
                        title: meme.title ?? 'No title',
                        imageUrl: meme.url ?? '',
                        ups: meme.ups ?? 0,
                        postLink: meme.postLink ?? '',
                        author: meme.author ?? 'Unknown',
                      ),
                    ),
                  );
                },
              ),
            ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: selectedIndex,
        onTap: onTabTapped,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.shuffle), label: 'Random'),
          BottomNavigationBarItem(icon: Icon(Icons.mood), label: 'Dank'),
          BottomNavigationBarItem(
            icon: Icon(Icons.sentiment_satisfied),
            label: 'Wholesome',
          ),
        ],
        selectedItemColor: Colors.deepPurple,
        unselectedItemColor: Colors.grey,
      ),
    );
  }
}
