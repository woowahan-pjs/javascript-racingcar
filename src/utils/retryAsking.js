const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

function askAgain(query, callback) {
  const rl = readline.createInterface({ input, output });
  rl.question(query, (answer) => {
    try {
      rl.close();
      callback(answer);
    } catch (e) {
      console.error(`[ERROR] ${e.message}`);
      askAgain(query, callback);
    }
  });
}

module.exports = askAgain;
