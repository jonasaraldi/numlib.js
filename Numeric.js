(function(global) {
	"use strict"

    global.Numeric = global.Numeric || Numeric;
    global.Numeric.Calculate = Calculate;

	function Calculate(a, b, e1, e2, func, fcalcx, fCritE1, fCritE2) {
		var xk, x0, a, b, fa, fb, fxk;
		var data = [];

		x0 = 0;

		for(var k = 1; true; k++) {
			fa = func(a);
			fb = func(b);
			xk = fcalcx(a,b,fa,fb);
			fxk = func(xk);

			var params = {
				k: k,
				a: a,
				b: b,
				fa: fa,
				fb: fb,
				x0: x0, 
				xk: xk,
				fxk: fxk
			};

			params.resCrit1 = fCritE1(params);
			params.resCrit2 = fCritE2(params);

			data.push(params);

			if(fCritE1(params) < e1 ||  fCritE2(params) < e2)
				return data;

			if(fa * fxk > 0) 
				a = xk;
			else
				b = xk;

			x0 = xk;
		}
	}

})(window);