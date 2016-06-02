//Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.
//
//has22([1, 2, 2]) → true
//has22([1, 2, 1, 2]) → false
//has22([2, 1, 2]) → false

function has22(nums) {
    var count = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === 2 && nums[i + 1] === 2){
            count++    
        }
    }
      if(count >= 1){
            console.log(true);
        }else{
            console.log(false)
        }
}


//has22([1, 2, 2]) 
//has22([1, 2, 1, 2]) 
//has22([2, 1, 2]) 
has22([3, 4, 2, 5])