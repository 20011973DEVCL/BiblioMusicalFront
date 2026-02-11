const { spawn, exec } = require("child_process");
const os = require("os");

const platform = os.platform();
const url = "http://localhost:4200";

let chromeCommand;

if (platform === "win32") {
  chromeCommand = `"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" ${url}`;
} else if (platform === "darwin") {
  chromeCommand = `open -a "Google Chrome" ${url}`;
} else {
  chromeCommand = `xdg-open ${url}`;
}

// Levanta Angular vinculado a la consola
const ng = spawn("ng", ["serve"], { stdio: "inherit", shell: true });

// Espera unos segundos y abre navegador
setTimeout(() => {
  exec(chromeCommand, (err) => {
    if (err) {
      console.log("Chrome no disponible. Abriendo navegador por defecto...");
      if (platform === "win32") exec(`start ${url}`);
      else exec(`open ${url}`);
    }
  });
}, 4000);

// Maneja cierre limpio
process.on("SIGINT", () => {
  ng.kill("SIGINT");
  process.exit();
});
