(function($root) {
	"use strict"

    $root.FunctionGenerator = $root.fg = FunctionGenerator;

    function FunctionGenerator(exp) {
		var expReg = /{([a-z])}/g;
		var output = [];
		var matches;

		while (matches = expReg.exec(exp)) {
			var newVariable = matches[1];

			if(output.indexOf(newVariable) == -1) 
				output.push(newVariable);
		}

		output.push("return " + exp.replace(/[{}]/g,""));
		return Function.apply(this, output);
	}
    
}(window));
