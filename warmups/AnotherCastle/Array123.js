//http://coursework.vschool.io/array-123/
//Given an array of ints, return true if .. 1, 2, 3, .. appears in the array somewhere.

function array123(ints){
    var myBool = false;
    
    for (var i = 0; i < ints.length; i++){
       if(ints[i] == 1 && ints[i + 1] == 2 && ints[i + 2] == 3){
           myBool = true;
       }
    }
    console.log(myBool)
}


array123([1, 1, 2, 3, 1]);  
array123([1, 1, 2, 4, 1]); 
array123([1, 1, 2, 1, 2, 3])



//if(string.charAt(i) == 'c' && string.charAt(i + 1) == 'o' && string.charAt(i + 3) == 'e')