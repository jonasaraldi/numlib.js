(function(global) {

    "use strict"

    global.Numeric = global.Numeric || {};
    global.Numeric.FalsePosition = FalsePosition; 

    function FalsePosition(a, b, e1, e2, fun, fCritE1, fCritE2) {
		function fcalcx(a, b, fa, fb) {
			return ((a * fb) - (b * fa)) / (fb - fa);
		}

		return global.Numeric.Calculate(a, b, e1, e2, fun, fcalcx, fCritE1, fCritE2);
	}

})(window);