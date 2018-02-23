/*
exec_ex

Run: node <file.js>

2018-02-23
*/

const { exec, execSync } = require('child_process');

/**
 * Execute simple shell command (async wrapper).
 * Note: this function can be used in older Node verisons.
 * In newer versions it's recommended to use execSync.
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function exec_command(cmd) {
    return new Promise(function (resolve, reject) {
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  }
  
  async function main() {
    // exec_command example
    let { stdout, stderr } = await exec_command('ls');
    for (let line of stdout.split('\n')) {
      console.log(`ls: ${line}`);
    }

    console.log(`stderr: ${stderr}`);

    // execSync example
    const sstdout = await execSync('ls').toString().split('\n');
    console.log(`***** sstdout type: ${typeof(sstdout)}`);
    console.log(`***** stdout: ${sstdout}`);
    for (let line of sstdout) {
        console.log(`ls2: ${line}`);
    }
    


  }
  
  main();
