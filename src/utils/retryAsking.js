const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

/**
 * @param {string} query
 * @param { (answer: string) => void } callback
 */
function retryAsking(query, callback) {
  const rl = readline.createInterface({ input, output });
  rl.question(query, (answer) => {
    try {
      rl.close();
      callback(answer);
    } catch (e) {
      console.error(`[ERROR] ${e.message}`);
      retryAsking(query, callback);
    }
  });
}

module.exports = retryAsking;
