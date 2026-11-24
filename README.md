# Cloud-Based Static Website Deployment

## Project title
**CloudNova – Cloud Computing Solutions**

## Project overview
CloudNova is a responsive static website developed using HTML, CSS and JavaScript. It demonstrates source-code management with Git and GitHub, hosting with GitHub Pages, basic HTTPS security, uptime checks with GitHub Actions, and performance testing with Google Lighthouse.

## Technologies
- HTML5, CSS3 and JavaScript
- Git and GitHub
- GitHub Pages
- GitHub Actions
- Google Lighthouse / PageSpeed Insights

## Features
- Responsive layout for desktop and mobile
- Cloud computing, storage, deployment and DevOps service sections
- Mobile navigation menu
- Front-end contact form demonstration
- Scheduled website availability check
- HTTPS hosting through GitHub Pages

## Project structure
```text
cognevance_cloud_website/
├── index.html
├── style.css
├── script.js
├── README.md
├── screenshots/
└── .github/
    └── workflows/
        └── uptime.yml
```

## Run locally
1. Install Python 3 if it is not already installed.
2. Open Terminal in this project directory.
3. Run `python3 -m http.server 8000`.
4. Visit `http://localhost:8000` in your browser.

You can also open `index.html` directly, but a local server is recommended for testing.

## Deploy with GitHub Pages
1. Create a **public** GitHub repository named `cognevance_cloud_website`.
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial CloudNova website project"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cognevance_cloud_website.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. After deployment, visit:
   `https://YOUR_USERNAME.github.io/cognevance_cloud_website/`
6. Enable **Enforce HTTPS** in Pages settings when available.

Replace `YOUR_USERNAME` with your GitHub username.

## Uptime monitoring
The workflow in `.github/workflows/uptime.yml` checks the published website every six hours and can also be run manually from the Actions tab. Edit the `SITE_URL` value in that file before pushing it to GitHub.

This is a basic scheduled availability check. It is not continuous monitoring and does not guarantee notification delivery.

## Performance testing
Open [Google PageSpeed Insights](https://pagespeed.web.dev/), enter the published website URL, and save the results for your project report.

## Security notes
- Use HTTPS for the published website.
- Do not commit passwords, access tokens, API keys or private credentials.
- GitHub Pages hosting is suitable for static files; it does not provide a server-side backend.
- The contact form is a front-end demonstration only. It does not send or store messages.

## Screenshots
Add your own project screenshots to the `screenshots/` folder, such as the local website, GitHub repository, Pages deployment, Actions run and Lighthouse report.

## Conclusion
This project demonstrates static website development, version control, cloud hosting, HTTPS configuration, basic automated uptime checking and performance evaluation.

## Project organization
Cognevance Technologies – Cloud Computing & DevOps
# CognevanceCloud
