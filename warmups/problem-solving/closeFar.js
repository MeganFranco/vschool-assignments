/*

Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

closeFar(1, 2, 10) → true 
closeFar(1, 2, 3) → false 
closeFar(4, 1, 3) → true

*/

function closeFar(a, b, c){
    var bADiff = Math.abs(a - b);
    var cADiff = Math.abs(a - c);
    var bCDiff = Math.abs(b - c);
    var
    
    if(bADiff > 2) {
        return (caDiff > 1 && bcDiff > 1)
    } else if (caDiff < 2) { 
        return (baDiff > 1 && bcDiff > 1)
    }
    return false;
}

closeFar(1, 2, 10) //→ true 
closeFar(1, 2, 3) //→ false 
closeFar(4, 1, 3) //→ true
