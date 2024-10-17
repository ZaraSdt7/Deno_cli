// export function Run(data:string[]) {
//     if(data.includes("--help")) {
//         console.log("Use: cli run [options]");
//         console.log("Options :");
//         console.log(" --help  show this help message");
//         return
//     }
//     console.log("Run app...");
//     if(data.length > 0) {
//         console.log(` Received Command: ${data.join(", ")}`);
//     }
// }

// deno-lint-ignore no-explicit-any
export function Run(options: Record<string, any>) {
    console.log("Running the application...");
    console.log("Options:", options);
    setTimeout(() => {
      console.log("Application is running.");
    }, 1000);
  }
  