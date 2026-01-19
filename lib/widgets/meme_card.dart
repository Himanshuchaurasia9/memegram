import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';
import '../models/meme_model.dart';

class MemeCard extends StatelessWidget {
  final String title;
  final String imageUrl;
  final int ups;
  final String postLink;
  final String author;

  const MemeCard({
    super.key,
    required this.title,
    required this.imageUrl,
    required this.ups,
    required this.postLink,
    required this.author,
  });

  // 🔹 Format likes (e.g., 1200 -> 1.2k)
  String formatLikes(int count) {
    if (count >= 1000000) {
      return '${(count / 1000000).toStringAsFixed(1)}M';
    } else if (count >= 1000) {
      return '${(count / 1000).toStringAsFixed(1)}k';
    } else {
      return count.toString();
    }
  }

  // 🔹 Share meme link
  void shareMeme() {
    final appLink = 'https://github.com/yourusername/memegram'; // your app link
    final text =
        'Check out this meme! $postLink\n\nGet MemeGram app: $appLink';
    Share.share(text);
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Card(
      elevation: 6,
      shadowColor: Colors.grey.withOpacity(0.3),
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 18,
                  child: Text(
                    author.isNotEmpty ? author[0].toUpperCase() : 'A',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                  backgroundColor: theme.primaryColor.withOpacity(0.3),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Text(
                    author,
                    style: theme.textTheme.titleSmall
                        ?.copyWith(fontWeight: FontWeight.w600),
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
          ),

          Center(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: CachedNetworkImage(
                imageUrl: imageUrl,
                fit: BoxFit.cover,
                placeholder: (context, url) => const SizedBox(
                  height: 250,
                  child: Center(child: CircularProgressIndicator()),
                ),
                errorWidget: (context, url, error) => const SizedBox(
                  height: 250,
                  child: Center(child: Icon(Icons.broken_image, size: 50)),
                ),
              ),
            ),
          ),

          Padding(
            padding: const EdgeInsets.all(12),
            child: Text(
              title,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: theme.textTheme.titleMedium
                  ?.copyWith(fontWeight: FontWeight.w600),
            ),
          ),

          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            child: Row(
              children: [
                const Icon(
                  CupertinoIcons.heart_fill,
                  color: Colors.red,
                  size: 20,
                ),
                const SizedBox(width: 6),
                Text(
                  formatLikes(ups),
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                const Spacer(),
                IconButton(
                  tooltip: 'Open in Browser',
                  icon: const Icon(CupertinoIcons.link),
                  onPressed: () async {
                    final uri = Uri.parse(postLink);
                      await launchUrl(uri);
                  },
                ),
                IconButton(
                  tooltip: 'Share Meme',
                  icon: const Icon(Icons.share_outlined),
                  onPressed: shareMeme,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
