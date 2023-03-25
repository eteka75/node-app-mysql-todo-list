const { __esModule } = require("@testing-library/jest-dom/dist/matchers");

setTimeout(() => {
  console.log("Bonjour depuis Node.js");
  clearInterval(temps);
}, 2000);

const temps = setInterval(() => {
  console.log("Exécution...");
}, 500);

console.log(__filename);
console.log(__dirname);
console.log(__esModule);
