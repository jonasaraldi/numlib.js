(function(global) {
    
    "use strict"

    global.Numeric = global.Numeric || {};
    global.Numeric.SecantMethod = SecantMethod; 

    function SecantMethod(x0, x1, e1, e2, f, fCritE1, fCritE2) {
        var data = [];

        if(Math.abs(f(x0)) < e1) { 
            return [{
                x0: x0
            }];
        }

        if(Math.abs(f(x1)) < e1 || Math.abs(x1 - x0) < e2) {
            return [{ 
                x0: x0, 
                x1: x1 
            }];
        }

        for (var k = 1; true; k++) {
            var xk = x1 - ((f(x1) / (f(x1) - f(x0))) * (x1 - x0));

            var params = {
                k: k, 
                x0: x0, 
                x1: x1,
                xk: xk,
                fxk: f(xk)
            };

            params.resCrit1 = fCritE1(params);
            params.resCrit2 = fCritE2(params);

            data.push(params);

            if(fCritE1(params) < e1 ||  fCritE2(params) < e2)
                return data;

            x0 = x1;
            x1 = xk;
        }
    }

})(window);