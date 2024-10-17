// deno-lint-ignore-file
// export function Build(data:string[]) {
//     if(data.includes("--help")) {
//         console.log("Use: cli run [options]");
//         console.log("Options :");
//         console.log(" --help  show this help message");
//         return
//     }
//     console.log("Build app...");
//     if(data.length > 0) {
//         console.log(` Received Arguments: ${data.join(", ")}`);
//     }
// }

export function Build(options: Record<string, any>) {
    console.log("Building the application...");
    console.log("Options:", options);
    setTimeout(() => {
      console.log("Build completed successfully.");
    }, 1000);
  }
  