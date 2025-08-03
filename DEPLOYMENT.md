# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages successfully.

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Ensure Git is installed on your computer
3. **Node.js**: Make sure Node.js is installed (version 14 or higher)

## 🔧 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository: `portfolio`
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### 2. Initialize Git and Push to GitHub

```bash
# Navigate to your portfolio directory
cd Portfolio

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio website commit"

# Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/KrishD22/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select **"gh-pages"** branch
6. Click **"Save"**

### 5. Wait for Deployment

- GitHub Pages will take a few minutes to build and deploy
- You can check the deployment status in the **"Actions"** tab
- Your site will be available at: `https://krishd22.github.io/portfolio`

## 🔄 Updating Your Site

After making changes to your code:

```bash
# Add your changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error**: 
   - Make sure repository is public
   - Check that gh-pages branch exists
   - Verify homepage URL in package.json

2. **Build Errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check console for any missing dependencies

3. **Assets Not Loading**:
   - Ensure all image paths are correct
   - Check that resume PDF is in the public folder

4. **EmailJS Not Working**:
   - Verify EmailJS configuration is correct
   - Check browser console for any errors

### Check Deployment Status:

1. Go to your repository on GitHub
2. Click **"Actions"** tab
3. Look for the latest deployment workflow
4. Check if it completed successfully

## 📱 Testing Your Deployment

1. **Desktop**: Test on different browsers (Chrome, Firefox, Safari, Edge)
2. **Mobile**: Test on various screen sizes
3. **Features to Test**:
   - Navigation links
   - Contact form submission
   - Resume download
   - Social media links
   - Animations and transitions

## 🔗 Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain name
2. Add a `CNAME` file in the `public` folder with your domain
3. Configure DNS settings with your domain provider
4. Update the `homepage` in `package.json`

## 📊 Performance Optimization

Your site is already optimized with:
- ✅ React production build
- ✅ Optimized images
- ✅ Minified CSS and JavaScript
- ✅ Efficient animations
- ✅ Responsive design

## 🎉 Success!

Once deployed, your portfolio will be live at:
**https://krishd22.github.io/portfolio**

Share this link with potential employers, clients, and on your social media profiles!

---

**Need Help?** Check the GitHub Pages documentation or create an issue in your repository.