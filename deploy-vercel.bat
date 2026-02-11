@echo off
echo ========================================
echo  Physical AI Textbook - Vercel Deploy
echo ========================================
echo.

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
    if errorlevel 1 (
        echo ERROR: Failed to install Vercel CLI
        echo Please install Node.js first from https://nodejs.org/
        pause
        exit /b 1
    )
)

echo.
echo Step 1: Logging in to Vercel...
echo Please use email: atifkhan14670@gmail.com
vercel login

echo.
echo Step 2: Deploying to Vercel...
vercel --prod

echo.
echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your textbook is now live on Vercel!
echo Check the URL provided above.
echo.
pause
