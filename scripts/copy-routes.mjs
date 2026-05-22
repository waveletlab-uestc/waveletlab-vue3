import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const distDir = new URL('../dist/', import.meta.url)
const indexPath = join(distDir.pathname, 'index.html')

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run vite build before copying route entries.')
}

const routeEntries = [
  '404.html',
  'committees.html',
  'contact.html',
  'guidance.html',
  'information.html',
  'news.html',
  'speakers.html',
  'timeline.html',
  'topics.html',
]

for (const entry of routeEntries) {
  copyFileSync(indexPath, join(distDir.pathname, entry))
}
