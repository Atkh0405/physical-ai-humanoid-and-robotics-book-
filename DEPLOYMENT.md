# Deployment Guide

## GitHub Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Physical AI & Humanoid Robotics Textbook"
```

### 2. Add Remote Repository
```bash
git remote add origin https://github.com/Atkh0405/physical-ai-robotics-textbook.git
git branch -M main
git push -u origin main
```

### 3. Configure Git User (if needed)
```bash
git config user.name "Atkh0405"
git config user.email "atifkhan14670@gmail.com"
```

## Vercel Deployment

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```
Enter your email: atifkhan14670@gmail.com

3. **Deploy**
```bash
vercel
```
Follow the prompts:
- Set up and deploy? Yes
- Which scope? Your account
- Link to existing project? No
- Project name? physical-ai-robotics-textbook
- Directory? ./
- Override settings? No

4. **Deploy to Production**
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository: `Atkh0405/physical-ai-robotics-textbook`
5. Configure:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
6. Click "Deploy"

## Environment Variables (if needed)

No environment variables required for this static site.

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Provide deployment URLs for each commit

## Project URLs

- **GitHub**: https://github.com/Atkh0405/physical-ai-robotics-textbook
- **Vercel**: Will be provided after deployment (e.g., https://physical-ai-robotics-textbook.vercel.app)

## Troubleshooting

### If deployment fails:
1. Check vercel.json configuration
2. Ensure all HTML files are valid
3. Check Vercel deployment logs
4. Verify file paths are correct

### If pages don't load:
1. Check that index.html exists
2. Verify vercel.json routes configuration
3. Check browser console for errors

## Post-Deployment Checklist

- [ ] Verify welcome page loads
- [ ] Test all chapter links
- [ ] Check AI assistant functionality
- [ ] Test search feature
- [ ] Verify progress tracking works
- [ ] Test keyboard shortcuts
- [ ] Check mobile responsiveness
- [ ] Verify all animations work

## Support

For issues, contact: atifkhan14670@gmail.com
