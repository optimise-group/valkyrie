#!/usr/bin/env node

"use strict";

const fs = require("fs").promises;
const path = require("path");
const picocolors = require("picocolors");

const version = require("../package.json").version;

const iconsDir = path.join(__dirname, "../icons/");
const pagesDir = path.join(__dirname, "../docs/public/data/icons/");

const VERBOSE = process.argv.includes("--verbose");

function capitalizeFirstLetter(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1))
    .split("-")
    .join(" ");
}

async function main(file) {
  const iconBasename = path.basename(file, path.extname(file));
  const iconTitle = capitalizeFirstLetter(iconBasename);
  const pageName = path.join(pagesDir, `${iconBasename}.json`);

  const pageTemplate = `{
  "title": "${iconTitle}",
  "categories": [],
  "tags": [],
  "created": "${version.substring(0, version.indexOf("-"))}",
  "updated": "${version.substring(0, version.indexOf("-"))}"
}`;

  try {
    await fs.access(pageName, fs.F_OK);

    if (VERBOSE) {
      console.log(
        `☑️ ${picocolors.cyan(iconBasename)}: Already exists, skipping`
      );
    }
  } catch {
    await fs.writeFile(pageName, pageTemplate);
    console.log(
      `✅ ${picocolors.cyan(iconBasename)}: ${picocolors.green("Page created")}`
    );
  }
}

(async () => {
  try {
    const timeLabel = picocolors.cyan(`Page generation finished`);

    console.log(picocolors.cyan(`Page generation started`));
    console.time(timeLabel);

    const files = await fs.readdir(iconsDir);

    await Promise.all(files.map(file => main(file)));

    const filesLength = files.length;

    console.log(
      picocolors.green("\nSuccess, %s page%s created!"),
      filesLength,
      filesLength !== 1 ? "s" : ""
    );
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
