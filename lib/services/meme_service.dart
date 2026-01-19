import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../models/meme_model.dart';

class MemeService {
  Future<List<Meme>?> fetchMemes(BuildContext context,{ required String subreddit,}) async {
    final Uri url;
    if (subreddit == 'random') {
     // Random memes
      url = Uri.parse('https://meme-api.com/gimme/50');
    } else {
      url = Uri.parse('https://meme-api.com/gimme/$subreddit/50');
    }

    try {
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final memes = (data['memes'] as List)
            .map((meme) => Meme.fromJson(meme))
            .toList();
        return memes;
      } else {
        throw Exception('Failed to load memes.');
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Error to load memes.")));
      return null;
    }
  }
}
