import axios from 'axios';
import * as cheerio from 'cheerio';

export interface Metadata {
  title: string;
  description: string;
  image: string | null;
  url: string;
}

export async function fetchMetadata(url: string): Promise<Metadata | null> {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    return {
      title: $('meta[property="og:title"]').attr('content') || $('title').text() || 'No Title Available',
      description:
        $('meta[property="og:description"]').attr('content') ||
        $('meta[name="description"]').attr('content') ||
        'No Description Available',
      image: $('meta[property="og:image"]').attr('content') || null,
      url,
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return null;
  }
}
