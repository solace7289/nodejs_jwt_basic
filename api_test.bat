@echo off

curl -X POST http://localhost:3000/api/login ^
  -H "Content-Type: application/json" ^
  -d "{\"username\": \"Hson\", \"password\": \"123456\"}"




