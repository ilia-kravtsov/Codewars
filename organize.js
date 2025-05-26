const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "3-kyu");

fs.readdirSync(folder).forEach((file) => {
  const fullPath = path.join(folder, file);

  if (fs.statSync(fullPath).isFile() && file.endsWith(".js")) {
    const fileName = path.basename(file, ".js");
    const dirPath = path.join(folder, fileName);
    const indexPath = path.join(dirPath, "index.js");

    const content = fs.readFileSync(fullPath, "utf8");

    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(indexPath, content);

    fs.unlinkSync(fullPath); 
  }
});
