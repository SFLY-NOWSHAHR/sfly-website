import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'public/data')

interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  seoDescription: string
  seoKeywords: string
}

interface Player {
  id: number
  slug: string
  name: string
  position: string
  bio: string
  achievements: string[]
  image: string
}

interface NewsItem {
  id: number
  slug: string
  title: string
  content: string
  image: string
  date: string
  seoDescription: string
}

async function getPosts(): Promise<Post[]> {
  try {
    const data = fs.readFileSync(path.join(dataDir, 'posts.json'), 'utf-8')
    return JSON.parse(data).sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}

async function getPlayers(): Promise<Player[]> {
  try {
    const data = fs.readFileSync(path.join(dataDir, 'players.json'), 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function getNews(): Promise<NewsItem[]> {
  try {
    const data = fs.readFileSync(path.join(dataDir, 'news.json'), 'utf-8')
    return JSON.parse(data).sort((a: NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}

async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getPosts()
  return posts.find(p => p.slug === slug)
}

async function getPlayerBySlug(slug: string): Promise<Player | undefined> {
  const players = await getPlayers()
  return players.find(p => p.slug === slug)
}

async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
  const newsItems = await getNews()
  return newsItems.find(n => n.slug === slug)
}

export {
  getPosts,
  getPlayers,
  getNews,
  getPostBySlug,
  getPlayerBySlug,
  getNewsBySlug,
  type Post,
  type Player,
  type NewsItem,
}
