@echo off

cd shared
call npm version patch
call npm run build
call npm publish

cd ../backend
call npm install @coreyyy34/mini-ai-app-builder-shared@latest

cd ../frontend
call npm install @coreyyy34/mini-ai-app-builder-shared@latest

cd ..
echo All done!
pause
