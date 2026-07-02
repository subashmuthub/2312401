const {Log} = require("./index");

async function testLogger(){
    const result = await Log(
        "backend",
        "error",
        "handler",
        "Logger test successfully"
    );
    console.log(result);
}
testLogger();