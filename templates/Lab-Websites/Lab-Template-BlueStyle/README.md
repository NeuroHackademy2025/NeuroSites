# 🧬 NeuroBio Lab Website test

A modern, responsive HTML + CSS template for scientific labs, including sections for your team, research, events, contact, and publications.

---

## 🚀 Features

- Lab logo in the header
- Team section with photos and roles
- Research project highlights
- 📚 Publications section with links to papers
- Events or courses
- Contact section with social links and logos
- Clean, responsive layout

---

## 📁 Folder Structure

lab-website/
├── index.html
├── style.css
└── images/
├── logo.png
├── ana.jpg
├── mark.jpg
└── social/
├── twitter-logo.png
├── facebook-logo.png
├── instagram-logo.png
└── linkedin-logo.png

yaml
Copiar
Editar

---

## ⚙️ Configuration Instructions

### 🔹 1. Lab Logo and Name
Replace `images/logo.png` and update the lab name in the `<header>`.

### 🔹 2. Team Members
Update images, names, and roles in the `#team` section. Example:

```html
<img src="images/ana.jpg" alt="Dr. Ana Rivera" class="team-photo" />
<h3>Dr. Ana Rivera</h3>
<p>Principal Investigator</p>
🔹 3. Research Projects
In the #research section, add a title and short description for each project.

🔹 4. Publications
Use the #publications section to list key scientific papers. Each block includes:

html
Copiar
Editar
<div class="publication">
  <p><strong>Author(s)</strong> (Year). Title. <em>Journal</em>.</p>
  <a href="link-to-pdf" target="_blank">View PDF</a>
</div>
You can add DOIs, BibTeX links, or arXiv IDs too.

🔹 5. Events and Courses
Add dates and descriptions in the #events section.

🔹 6. Contact + Social Media
Edit the #contact section:

Email address

Social media links

Platform icons and logos (in /images/social/)

💻 How to Use Locally
Download the project folder.

Open index.html in a web browser.

Edit with VS Code or any text editor.

Save and refresh to see changes.

🌍 How to Deploy (Free)
🔹 Option 1: GitHub Pages
Push the project to GitHub.

Go to Settings > Pages.

Select main branch and / (root) folder.

Your site is live at: https://yourusername.github.io/lab-website/

🔹 Option 2: Netlify / Vercel
Drag and drop the folder into the dashboard.

Your site is live in seconds.

🧾 License
This template is free for educational and lab use. Modify and share freely.