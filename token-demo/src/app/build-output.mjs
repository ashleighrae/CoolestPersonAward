import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ['tokens/**/*.json'],
  preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
  platforms: {
    css: {
      transformGroup: 'tokens-studio', // <-- apply the tokens-studio transformGroup to apply all transforms
      transforms: ['name/kebab'], // <-- add a token name transform for generating token names, default is camel
      buildPath: 'src/app/build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

// Add logging to see if tokens are being read correctly
console.log('Reading tokens from:', sd.options.source);

sd.cleanAllPlatforms();
sd.buildAllPlatforms().then(() => {
  console.log('Build completed');

  // Check if the file was created
  const filePath = path.join('src/app/build/css/', 'variables.css');
  if (!fs.existsSync(filePath)) {
    console.log('No tokens found. Creating default variables.css file.');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, ':root {\n  /* No tokens found */\n}');
  }
}).catch((error) => {
  console.error('Build failed:', error);
});