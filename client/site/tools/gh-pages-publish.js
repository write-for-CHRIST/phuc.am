const { cd, exec, echo, touch } = require("shelljs");
const { readFileSync } = require("fs");
const url = require("url");

let repoUrl;
let pkg = JSON.parse(readFileSync("package.json"));
if (typeof pkg.repository === "object") {
  if (!pkg.repository.hasOwnProperty("url")) {
    throw new Error("URL does not exist in repository section");
  }
  repoUrl = pkg.repository.url;
} else {
  repoUrl = pkg.repository;
}

let parsedUrl = url.parse(repoUrl);
let repository = (parsedUrl.host || "") + (parsedUrl.path || "");
let ghToken = process.env.GH_TOKEN;

echo("Deploying docs!");
cd("build");
touch(".nojekyll");
exec("git init");
exec("git add .");
exec('git config user.name "khoadngit"');
exec('git config user.email "khoadn.email@gmail.com"');
exec('git commit -m "chore(release): update site"');
exec(
  `git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`
);
echo("Site deployed!");
