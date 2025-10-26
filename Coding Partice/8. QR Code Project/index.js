/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import QRCode from 'qrcode';
import { input } from '@inquirer/prompts';

const url = await input({message: "Enter the URL: "});
// const url = process.argv[2];


let imgePath = 'qrcode.png';
QRCode.toFile(imgePath, url, (err) => {
  if (err) throw err;
  console.log("QR code saved as qrcode.png ✅");
});

fs.appendFileSync('URL.txt', `${new Date().toLocaleString()} - ${url}\n`);