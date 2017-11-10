(function(global) {
    
    "use strict"

    global.Numeric = global.Numeric || {};
    global.Numeric.NewtonRaphsonMethod = NewtonRaphsonMethod; 

    function NewtonRaphsonMethod(x0, e1, e2, f, derivative, fCritE1, fCritE2) {
		var data = [];

		if(Math.abs(f(x0)) < e1) {
			return [{
				x0: x0
			}];
		}

		for (var k = 1; true; k++) {
			var xk = x0 - (f(x0) / derivative(x0));

			var params = {
				k: k,
				x0: x0,
				xk: xk,
				fxk: f(xk)
			};

			params.resCrit1 = fCritE1(params);
			params.resCrit2 = fCritE2(params);

			data.push(params);

			if(fCritE1(params) < e1 || fCritE2(params) < e2)
				return data;

			x0 = xk;
		}
	}

})(window);