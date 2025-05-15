import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

let accessToken = null;
let tokenExpiry = 0;

async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken; // reuse token if still valid
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('username', process.env.REDDIT_USERNAME);
  params.append('password', process.env.REDDIT_PASSWORD);

  const basicAuth = Buffer.from(
    `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`
  ).toString('base64');

  const response = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': process.env.REDDIT_USER_AGENT,
    },
    body: params,
  });

  const data = await response.json();

  if (data.access_token) {
    accessToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000 - 60000; // refresh 1 min before expiry
    return accessToken;
  } else {
    throw new Error('Failed to get Reddit access token: ' + JSON.stringify(data));
  }
}

export async function fetchRedditPosts(keywords) {
  const token = await getAccessToken();

  const query = keywords
    .map((k) => `"${k}"`)
    .join(' OR ');

  const url = `https://oauth.reddit.com/search?q=${encodeURIComponent(query)}&limit=20&sort=new`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': process.env.REDDIT_USER_AGENT,
    },
  });

  const data = await response.json();

  if (!data.data) {
    console.log('No data in Reddit response:', data);
    return;
  }

  console.log(`🔍 Found ${data.data.children.length} posts for keywords: ${keywords.join(', ')}`);

  data.data.children.forEach((post) => {
    console.log(`- [${post.data.subreddit}] ${post.data.title}`);
  });
}
