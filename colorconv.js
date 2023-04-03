#!/bin/env node
import converter from "convert-color-js";
import { Command } from "commander";
import clipboardy from "clipboardy";
import c from "ansi-colors";

const program = new Command();

program.usage("[options] <subcommand> ...");
program
  .command("rgb")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isRgb(color)) {
      clipboardy.writeSync(converter.convert(color, newFormat));
      console.log(
        c.green(
          `Converted value is ${converter.convert(
            color,
            newFormat
          )}. It has been copied to your clipboard.`
        )
      );
    }
  });

program
  .command("rgba")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isRgba(color)) {
      clipboardy.writeSync(converter.convert(color, newFormat));
      console.log(
        c.green(
          `Converted value is ${converter.convert(
            color,
            newFormat
          )}. It has been copied to your clipboard.`
        )
      );
    }
  });

program
  .command("hex")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isHex(color)) {
      clipboardy.writeSync(converter.convert(color, newFormat));
      console.log(
        c.green(
          `Converted value is ${converter.convert(
            color,
            newFormat
          )}. It has been copied to your clipboard.`
        )
      );
    }
  });

program
  .command("hexa")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isHexa(color)) {
      clipboardy.writeSync(converter.convert(color, newFormat));
      console.log(
        c.green(
          `Converted value is ${converter.convert(
            color,
            newFormat
          )}. It has been copied to your clipboard.`
        )
      );
    }
  });

program
  .command("hsl")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isHsl(color)) {
      clipboardy.writeSync(converter.convert(color, newFormat));
      console.log(
        c.green(
          `Converted value is ${converter.convert(
            color,
            newFormat
          )}. It has been copied to your clipboard.`
        )
      );
    }
  });

program
  .command("hsla")
  .description("Convert a Color to another Format")
  .argument("<color>", "color to convert")
  .argument("[newFormat]", "format to convert to")
  .action((color, newFormat) => {
    if (converter.isHsla(color)) {
      clipboardy.writeSync(converter.convert(color, newFormat));
      console.log(
        c.green(
          `Converted value is ${converter.convert(
            color,
            newFormat
          )}. It has been copied to your clipboard.`
        )
      );
    }
  });

program.parse(process.argv);
