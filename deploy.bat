@echo off
echo ========================================
echo  Physical AI Textbook - GitHub Deploy
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo Step 1: Configuring Git...
git config user.name "Atkh0405"
git config user.email "atifkhan14670@gmail.com"

echo.
echo Step 2: Initializing Git repository...
if not exist .git (
    git init
    echo Git repository initialized!
) else (
    echo Git repository already exists!
)

echo.
echo Step 3: Adding files...
git add .

echo.
echo Step 4: Creating commit...
git commit -m "Deploy: Physical AI & Humanoid Robotics Interactive Textbook"

echo.
echo Step 5: Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Atkh0405/physical-ai-robotics-textbook.git

echo.
echo Step 6: Pushing to GitHub...
git branch -M main
git push -u origin main --force

echo.
echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your project is now on GitHub:
echo https://github.com/Atkh0405/physical-ai-robotics-textbook
echo.
echo Next Steps:
echo 1. Go to https://vercel.com
echo 2. Sign in and click "New Project"
echo 3. Import your GitHub repository
echo 4. Click "Deploy"
echo.
pause
