# 🧠 Personal Blog Template for Scientists

A clean, lightweight HTML/CSS template for creating a personal academic blog. Designed for scientists, students, and researchers to showcase their bio, thoughts, and contact info with minimal setup.

---

## 📁 Folder Structure

```
templates/
└── personal-pages/
    └── personal-blog/
        ├── manifest.json
        ├── index.html
        ├── about.html
        ├── blog.html
        ├── post.html
        ├── contact.html
        ├── style.css
        ├── script.js
        ├── preview.png
```

---

## 🚀 Pages & Placeholders

| Page         | Purpose                     | Key Placeholders           |
|--------------|------------------------------|-----------------------------|
| index.html   | Homepage                    | `{{YOUR_NAME}}`, `{{SHORT_BIO}}`, `{{BLOG_POSTS}}` |
| about.html   | Bio/About section           | `{{YOUR_NAME}}`, `{{SHORT_BIO}}`         |
| blog.html    | Blog index page             | `{{BLOG_POSTS}}`                         |
| post.html    | Individual blog post layout | `{{POST_TITLE}}`, `{{POST_DATE}}`, `{{POST_CONTENT}}` |
| contact.html | Contact info and links      | `{{EMAIL}}`, `{{SOCIAL_LINKS}}`          |

These placeholders can be replaced manually or via a static site generator / templating script.

---

## 🎨 Features

- 🌓 Built-in dark mode toggle (top right corner)
- 📱 Responsive layout with accessible contrast
- 🧩 Modular structure (each page in its own HTML file)
- 🔧 Easy to edit with plain HTML/CSS

---

## ⚙️ Setup Instructions

1. Clone or download this repository.
2. Open each `.html` file and replace `{{...}}` placeholders with your content.
3. Customize styles in `style.css`.
4. Open `index.html` in a browser to preview.

To host your site online:
- Push to GitHub and enable **GitHub Pages**
- Or upload the folder to any static hosting provider (e.g. Netlify, Vercel)

---

## 📸 Preview

![preview](personal-blog/preview.png)

---

## 📄 License

MIT — Free to use, modify, and distribute. Please credit if you fork significantly.

---

🧬 Made with ❤️ for curious minds.