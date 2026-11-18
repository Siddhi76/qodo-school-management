import fs from 'fs';
import sharp from 'sharp';

async function main() {
  const input = 'features-preview.png';
  const output = 'features-preview.png';
  const buffer = await sharp(input).resize(1440, 900, { fit: 'fill' }).toBuffer();
  await fs.promises.writeFile(output, buffer);
  console.log('resized');
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
