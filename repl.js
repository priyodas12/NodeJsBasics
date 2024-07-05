//REPL= READ EVALUATE PRINT LOOP

//with node command in terminal.

const repl = require("repl");

const localRepl = repl.start();

localRepl.on("start", () => {
	console.log('Starting REPL..');
});

localRepl.on("exit", () => { 
    console.log("Exiting REPL..");
})