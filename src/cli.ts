// import { Build } from "../command/build.ts";
// import { Run } from "../command/run.ts";
// import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";



// function main() {
//   const data = Deno.args;

//   if (data.length === 0) {
//     console.log("Use: cli <command> [options]");
//     console.log("Commands:");
//     console.log("  run      Run the application");
//     console.log("  build    Build the application");
//     console.log("Options:");
//     console.log("  --help   Show this help message");
//     console.log("  --version   Show the version number");
//     return;
//   }

//   const command = data[0];

//   switch (command) {
//     case "run":
//       Run(data.slice(1)); 
//       break;
//     case "build":
//       Build(data.slice(1)); 
//       break;
//     case "--version":
//       console.log("cli version 2.0.0");
//       break;
//     case "-- help":
//     case "-h":
//       console.log("Use: mycli <command> [options]");
//       console.log("Commands:");
//       console.log("  run      Run the application");
//       console.log("  build    Build the application");
//       console.log("Options:");
//       console.log("  --help   Show this help message");
//       console.log("  --version   Show the version number");
//       break;
//     default:
//       console.log(`No command: ${command}`);
//       console.log('Use "--help" for a list of available commands.');
//       break;
//   }
// }

// main();

import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { Build } from "../command/build.ts";
import { Run } from "../command/run.ts";

const cli = new Command()
  .name("cli")
  .version("2.0.0")
  .description("CLI to run and build the application.")
  .command("run", "Run the application")
  // deno-lint-ignore no-explicit-any
  .action((options:string | any) => {
    Run(options);
  })
  .command("build", "Build the application")
  // deno-lint-ignore no-explicit-any
  .action((options:string | any) => {
    Build(options);
  })
  .option("-h, --help", "Show help", { standalone: true })
  .option("-v, --version", "Show the version number", { standalone: true });

cli.parse(Deno.args);
