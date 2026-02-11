# 🚀 Quick Deployment Guide

## Prerequisites

### 1. Install Git
1. Download Git from: https://git-scm.com/download/win
2. Run the installer
3. Use default settings
4. Restart your terminal after installation

### 2. Install Node.js (for Vercel CLI)
1. Download from: https://nodejs.org/
2. Install LTS version
3. Restart your terminal

## 📦 Deploy to GitHub

### Step 1: Open PowerShell in Project Directory
```powershell
cd C:\Users\sss\Desktop\hacathon-1
```

### Step 2: Configure Git
```powershell
git config --global user.name "Atkh0405"
git config --global user.email "atifkhan14670@gmail.com"
```

### Step 3: Initialize and Push
```powershell
# Initialize repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Physical AI & Humanoid Robotics Textbook"

# Add remote repository
git remote add origin https://github.com/Atkh0405/physical-ai-robotics-textbook.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll need to create the repository on GitHub first:
1. Go to https://github.com/new
2. Repository name: `physical-ai-robotics-textbook`
3. Make it Public
4. Don't initialize with README
5. Click "Create repository"

## 🌐 Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com/signup
   - Sign up with GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose: `Atkh0405/physical-ai-robotics-textbook`

3. **Configure Project**
   - Project Name: `physical-ai-robotics-textbook`
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live!

### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login
# Enter: atifkhan14670@gmail.com

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📋 Deployment Checklist

After deployment, verify:
- [ ] Welcome page loads: `https://your-project.vercel.app/welcome.html`
- [ ] Home page works: `https://your-project.vercel.app/index.html`
- [ ] All 10 chapters are accessible
- [ ] AI Assistant button appears
- [ ] Search functionality works
- [ ] Progress tracking saves
- [ ] Keyboard shortcuts work
- [ ] Mobile responsive design

## 🔗 Your URLs

After deployment, you'll have:
- **GitHub**: https://github.com/Atkh0405/physical-ai-robotics-textbook
- **Vercel**: https://physical-ai-robotics-textbook.vercel.app (or similar)

## 🛠️ Troubleshooting

### Git not recognized
- Install Git from https://git-scm.com/
- Restart PowerShell after installation

### Authentication required for GitHub
```powershell
# Use GitHub Personal Access Token
# Generate at: https://github.com/settings/tokens
# Use token as password when prompted
```

### Vercel deployment fails
- Check vercel.json is present
- Ensure all HTML files are valid
- Check deployment logs in Vercel dashboard

## 📞 Support

- GitHub Issues: https://github.com/Atkh0405/physical-ai-robotics-textbook/issues
- Email: atifkhan14670@gmail.com

## 🎉 Success!

Once deployed, share your textbook:
- Share the Vercel URL with students
- Add the link to your GitHub README
- Promote on social media

Your Physical AI & Humanoid Robotics Textbook is now live! 🤖📚✨
