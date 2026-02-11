@echo off
echo ========================================
echo  UPLOAD TO GITHUB - SIMPLE METHOD
echo ========================================
echo.
echo Your project needs to be uploaded to:
echo https://github.com/Atkh0405/physical-ai-robotics-textbook
echo.
echo Current location: C:\Users\sss\Desktop\hacathon-1
echo.
echo ========================================
echo  EASIEST METHOD: GitHub Desktop
echo ========================================
echo.
echo Opening GitHub Desktop download page...
timeout /t 2 >nul
start https://desktop.github.com/
echo.
echo After installing GitHub Desktop:
echo 1. Sign in with username: Atkh0405
echo 2. Click File - Add Local Repository
echo 3. Browse to: C:\Users\sss\Desktop\hacathon-1
echo 4. Click "Publish repository"
echo 5. Name: physical-ai-robotics-textbook
echo 6. Uncheck "Keep this code private"
echo 7. Click "Publish repository"
echo.
echo ========================================
echo  ALTERNATIVE: Manual Web Upload
echo ========================================
echo.
echo Opening GitHub new repository page...
timeout /t 2 >nul
start https://github.com/new
echo.
echo After creating repository:
echo 1. Name: physical-ai-robotics-textbook
echo 2. Make it Public
echo 3. Click "uploading an existing file"
echo 4. Drag all files from this folder
echo 5. Click "Commit changes"
echo.
echo ========================================
echo  Opening Visual Guide
echo ========================================
timeout /t 2 >nul
start http://localhost:8000/WHY_NOT_PUSHED.html
echo.
echo ========================================
echo  Instructions opened in your browser!
echo ========================================
echo.
pause
