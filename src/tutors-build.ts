#!/usr/bin/env node
import { program } from "commander";
import { one } from "./commands/1";
import { two } from "./commands/2";
import { three } from "./commands/3";
import four from "./commands/4";
import five from "./commands/5";
import six from "./commands/6";
import seven from "./commands/7";
import eight from "./commands/8";
import nine from "./commands/9";
import ten from "./commands/10";

program.name("tutors-build").description("CLI tool to help scaffold projects for the Tutors open source project (tutors.dev)");

program
  .option("-1, --one", "create one", one)
  .option("-2, --two", "create two", two)
  .option("-3, --three", "create three", three)
  .option("-4, --four", "create four", four)
  .option("-5, --five", "create five", five)
  .option("-6, --six", "create six", six)
  .option("-7, --seven", "create seven", seven)
  .option("-8, --eight", "create eight", eight)
  .option("-9, --nine", "create nine", nine)
  .option("-10, --ten", "create ten", ten);

program.parse();

if (process.argv.length < 3) {
  program.help();
}
