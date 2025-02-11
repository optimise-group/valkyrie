#!/usr/bin/env node

"use strict";

const fs = require("fs").promises;
const fst = require("fs");
const path = require("path");
const picocolors = require("picocolors");

const iconsDir = path.join(__dirname, "../docs/public/data/icons");
const pagesDir = path.join(__dirname, "../docs/src/data/");

function getReactImportName(string) {
  return `vi${string
    .split("-")
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join("")}`;
}

async function main(file) {
  const iconFilePath = path.join(iconsDir, file);
  const iconFile = fst.readFileSync(iconFilePath);

  let iconJson = {};

  try {
    iconJson = JSON.parse(iconFile);
  } catch (e) {
    console.log(iconFilePath);
  }

  const iconBasename = path.basename(file, path.extname(file));
  const iconTitle = getReactImportName(iconBasename);

  const jsonTemplate = `
  {
    component: '${iconTitle}',
    categories: ${JSON.stringify(iconJson.categories)},
    tags: ${JSON.stringify(iconJson.tags)},
    slug: '${iconBasename}',
    icon: ${iconTitle}
  }`;

  return [`${iconTitle}`, jsonTemplate, iconJson.categories];
}

(async () => {
  try {
    const timeLabel = picocolors.cyan(`Library generation finished`);

    console.log(picocolors.cyan(`Library generation started`));
    console.time(timeLabel);

    const files = await fs.readdir(iconsDir);

    const names = [];
    const configs = [];
    let categories = new Set();

    // Read content from each icon
    await Promise.all(
      files.map(async file => {
        const [name, config, cats] = await Promise.resolve(main(file));

        names.push(name);
        configs.push(config);

        cats.map(cat => {
          categories.add(cat);
        });
      })
    );

    categories = Array.from(categories).sort();

    const template = `
import { ${names.map(icon => `${icon}`)} } from '@sippy-platform/valkyrie';

const icons = [${configs.map(page => `${page}`)}
];

export default icons;`;

    await fs.writeFile(path.join(pagesDir, `icons.ts`), template);

    const categoriesTemplate = `
import { viCircleDashed } from '@sippy-platform/valkyrie';

const categories = [${categories.map(
      cat => `
  {
    slug: "${cat}",
    title: "${cat}",
    icon: viCircleDashed
  }`
    )}
];

export default categories;`;

    // await fs.writeFile(path.join(pagesDir, `categories.ts`), categoriesTemplate)

    const filesLength = files.length;

    console.log(
      picocolors.green("\nSuccess, %s icon%s written to library!"),
      filesLength,
      filesLength !== 1 ? "s" : ""
    );
    console.timeEnd(timeLabel);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
