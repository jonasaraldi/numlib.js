(function(global) {

    "use strict"

    global.Numeric = global.Numeric || {};
    global.Numeric.Bisection = Bisection; 

    function Bisection(a, b, e1, e2, fn, fCritE1, fCritE2) {
		function fcalcx(a, b) {
			return (a + b) / 2;
		}

		return global.Numeric.Calculate(a, b, e1, e2, fn, fcalcx, fCritE1, fCritE2);
	}

})(window);