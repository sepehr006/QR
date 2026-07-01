@echo off
setlocal

cd /d "%~dp0"

set "REMOTE_URL=https://github.com/sepehr006/QR.git"
set "BRANCH_NAME=main"
set "COMMIT_MESSAGE=Update project"

echo.
echo ========================================
echo  QR Site - GitHub Push
echo ========================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed or is not available in PATH.
  echo Please install Git, then run this file again.
  pause
  exit /b 1
)

if not exist ".git" (
  echo Initializing git repository...
  git init
  if errorlevel 1 goto :error
)

call :ensure_gitignore "node_modules"
call :ensure_gitignore ".next"
call :ensure_gitignore "dist"
call :ensure_gitignore "out"
call :ensure_gitignore "*.log"
call :ensure_gitignore ".env"
call :ensure_gitignore ".env.local"
call :ensure_gitignore "tsconfig.tsbuildinfo"

git config user.name >nul 2>nul
if errorlevel 1 git config user.name "Sepehr"

git config user.email >nul 2>nul
if errorlevel 1 git config user.email "sepehr006@users.noreply.github.com"

git branch -M %BRANCH_NAME%
if errorlevel 1 goto :error

git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin %REMOTE_URL%
) else (
  git remote set-url origin %REMOTE_URL%
)
if errorlevel 1 goto :error

echo Staging project files...
git add .gitignore push-to-github.bat PLAN.md eslint.config.mjs next-env.d.ts next.config.ts package-lock.json package.json postcss.config.js tailwind.config.ts tsconfig.json src skills
if errorlevel 1 goto :error

git diff --cached --quiet
if errorlevel 1 (
  echo Creating commit...
  git commit -m "%COMMIT_MESSAGE%"
  if errorlevel 1 goto :error
) else (
  echo No new tracked project changes to commit.
)

echo Pushing to GitHub...
git push -u origin %BRANCH_NAME%
if errorlevel 1 goto :error

echo.
echo Done. Project pushed to:
echo %REMOTE_URL%
echo.
pause
exit /b 0

:ensure_gitignore
findstr /x /c:%1 ".gitignore" >nul 2>nul
if errorlevel 1 echo %~1>>".gitignore"
exit /b 0

:error
echo.
echo Push failed. Please read the error message above.
echo If GitHub asks for authentication, sign in and run this file again.
echo.
pause
exit /b 1
