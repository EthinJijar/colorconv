#!/bin/env node
import converter from "convert-color-js";
import convertColor from "../src/convertColor";

require("../src/cli").cli(process.argv);

program.usage("[options] <subcommand> ...");
program
  .command("rgb")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isRgb(color)) {
      converter.convert(color, newFormat);
    }
  });

program.parse(process.argv);

// .option("--rgba")
// .on("--rgba", function (initialColor) {
//   if (converter.isRgba(initialColor)) {
//     convertColor(initialColor);
//   }
// })
// .option("--hex")
// .on("--hex", function (initialColor) {
//   if (converter.isHex(initialColor)) {
//     convertColor(initialColor);
//   }
// })
// .option("--hexa")
// .on("--hexa", function (initialColor) {
//   if (converter.isHexa(initialColor)) {
//     convertColor(initialColor);
//   }
// })
// .option("--hsl")
// .on("--hsl", function (initialColor) {
//   if (converter.isHsl(initialColor)) {
//     convertColor(initialColor);
//   }
// })
// .option("--hsla")
// .on("--hsla", function (initialColor) {
//   if (converter.isHsla(initialColor)) {
//     convertColor(initialColor);
//   }
// })
