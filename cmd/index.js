const { Translate } = require("@google-cloud/translate").v2;
const fs = require("fs");
const config = require("config");
console.log(config);

process.env.GOOGLE_APPLICATION_CREDENTIALS = "config/google-auth.json";
const projectId = config.get("projectId");

const translate = new Translate({ projectId });

async function start() {
  const target = "zh-CN";

  const htmlFile = fs.readFileSync("cmd/src.html");
  const [result] = await translate.translate(htmlFile.toString(), target);
  fs.writeFileSync("cmd/dst.html", result);

  const txtFile = fs.readFileSync("cmd/src.txt");
  const [result2] = await translate.translate(txtFile.toString(), target);
  fs.writeFileSync("cmd/dst.txt", result2);
}

start();
