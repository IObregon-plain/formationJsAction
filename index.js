const core = require('@actions/core');
const github = require('@actions/github');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}`);
    console.log(`Hello ${nameToGreet.split('').join(' ')}`);
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
}catch (error){
    core.setFailed(error.message);
}