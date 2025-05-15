import { fetchRedditPosts } from '../services/redditService.js';
import { pathToFileURL } from 'url';


if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log('✅ Running fetchRedditPosts...');
  fetchRedditPosts(['inkwell', 'AI writing tool']);
}
