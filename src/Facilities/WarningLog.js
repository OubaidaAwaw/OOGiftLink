
export default function WarningLog() {
  // warining for users who inspect our website
console.log("%c⚠️ Warning ⚠️", "color: yellow; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 2px red;");
console.warn(
`%c
░█     █░ ▄▄▄       ██▀███   ██▓ ▒██   ██▒ ███▄    █  ▄▄▄       ███▄    █  
▓█░ █ ░█░▒████▄    ▓██ ▒ ██▒▓██▒ ▒▒ █ █ ▒░ ██ ▀█   █ ▒████▄     ██ ▀█   █  
▒█░ █ ░█ ▒██  ▀█▄  ▓██ ░▄█ ▒▒██▒ ░░  █   ░▓██  ▀█ ██▒▒██  ▀█▄  ▓██  ▀█ ██▒ 
░█░ █ ░█ ░██▄▄▄▄██ ▒██▀▀█▄  ░██░  ░ █ █ ▒ ▓██▒  ▐▌██▒░██▄▄▄▄██ ▓██▒  ▐▌██▒ 
░░██▒██▓  ▓█   ▓██▒░██▓ ▒██▒░██░ ▒██▒ ▒██▒▒██░   ▓██░ ▓█   ▓██▒▒██░   ▓██░ 
░ ▓░▒ ▒   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░▓   ▒▒ ░ ░▓ ░░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░   ▒ ▒  
  ▒ ░ ░    ▒   ▒▒ ░  ░▒ ░ ▒░ ▒ ░ ░░   ░▒ ░░ ░░   ░ ▒░  ▒   ▒▒ ░░ ░░   ░ ▒░ 
  ░   ░    ░   ▒     ░░   ░  ▒ ░  ░    ░     ░   ░ ░   ░   ▒      ░   ░ ░  
    ░          ░  ░   ░      ░    ░    ░           ░       ░  ░         ░  
`,
"color: red; font-size: 12px; font-weight: bold; font-family: monospace;"
);
console.log("%cUsing this console could allow attackers to impersonate you and steal your information using an attack known as Self-XSS. Do not enter or paste code that you do not know the content of!", "color: orange; font-size: 18px; font-weight: bold;");
}
