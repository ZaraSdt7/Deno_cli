export function Run(data:string[]) {
    if(data.includes("--help")) {
        console.log("Use: cli run [options]");
        console.log("Options :");
        console.log(" --help  show this help message");
        return
    }
    console.log("Run app...");
    if(data.length > 0) {
        console.log(` Received Command: ${data.join(", ")}`);
    }
}