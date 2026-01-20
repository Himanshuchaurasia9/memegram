import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:share_plus/share_plus.dart';
import '../models/meme_model.dart';

class FullscreenMemeScreen extends StatelessWidget {
  final Meme meme;

  const FullscreenMemeScreen({super.key, required this.meme});

  // Helper to format likes (e.g., 1.2k)
  String formatLikes(int likes) {
    if (likes >= 1000000) {
      return '${(likes / 1000000).toStringAsFixed(1)}M';
    } else if (likes >= 1000) {
      return '${(likes / 1000).toStringAsFixed(1)}k';
    } else {
      return likes.toString();
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      backgroundColor: theme.scaffoldBackgroundColor,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: IconThemeData(color: theme.iconTheme.color),
        actions: [
          Row(
            children: [
              const Icon(Icons.favorite, color: Colors.red),
              const SizedBox(width: 6),
              Text(
                formatLikes(meme.ups ?? 0),
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
            ],
          ),
          IconButton(
            tooltip: 'Share Meme',
            icon: const Icon(Icons.share_outlined),
            onPressed: () {
              Share.share(
                '${meme.title ?? 'Check out this meme!'}\n${meme.postLink ?? ''}\nGet MemeGram: https://himanshuchaurasia9.github.io/memegram/',
              );
            },
          ),
          IconButton(
            icon: const Icon(CupertinoIcons.link),
            onPressed: () async {
              final uri = Uri.parse(meme.postLink ?? '');
                await launchUrl(uri, mode: LaunchMode.externalApplication);
            },
          ),
        ],
      ),
      body: Center(
        child: InteractiveViewer(
          panEnabled: true,
          minScale: 0.5,
          maxScale: 3.0,
          child: CachedNetworkImage(
            imageUrl: meme.url ?? '',
            placeholder: (context, url) =>
            const Center(child: CircularProgressIndicator()),
            errorWidget: (context, url, error) =>
            const Icon(Icons.broken_image, size: 80),
          ),
        ),
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
        color: theme.scaffoldBackgroundColor,
        child: Text(
          meme.title ?? 'No Title',
          style: theme.textTheme.titleMedium
              ?.copyWith(fontWeight: FontWeight.bold),
          // maxLines: 1,
          // overflow: TextOverflow.ellipsis,
        ),
      ),
    );
  }
}
