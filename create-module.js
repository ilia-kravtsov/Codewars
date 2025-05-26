const fs = require("fs");
const path = require("path");

const folderName = process.argv[2];

if (!folderName) {
  console.error("Укажи имя папки: npm run create-module <folderName>");
  process.exit(1);
}

const targetPath = path.join(__dirname, folderName);

if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath);
  fs.writeFileSync(path.join(targetPath, "index.js"), "");
  fs.writeFileSync(path.join(targetPath, "README.md"), `# ${folderName}`);
  console.log(`✅ Папка "${folderName}" и файлы созданы.`);
} else {
  console.warn(`⚠️ Папка "${folderName}" уже существует.`);
}
