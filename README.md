# Release the Duck 🎵

A daily music journal built with [Astro](https://astro.build).

## Quick Start

```bash
npm install
npm run dev
```

## Writing a New Post

Create a `.md` file in `src/content/blog/` with this frontmatter:

### Album Review
```yaml
---
title: "Your Review Title"
description: "One-line summary"
pubDate: 2026-05-25
artist: "Artist Name"
album: "Album Name"
rating: 8
genre: ["Genre1", "Genre2"]
type: "review"
---
```

### Journal Entry
```yaml
---
title: "Your Entry Title"
description: "One-line summary"
pubDate: 2026-05-25
artist: "Artist Name"
type: "journal"
---
```

### Essay
```yaml
---
title: "Your Essay Title"
description: "One-line summary"
pubDate: 2026-05-25
type: "essay"
---
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Connect it to Netlify
3. Netlify auto-detects the config from `netlify.toml`

## Add Album Art

Put images in `src/assets/` and reference them in frontmatter:

```yaml
heroImage: ../../assets/album-cover.jpg
```
