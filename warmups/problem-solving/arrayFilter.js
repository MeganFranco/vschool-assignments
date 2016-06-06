Array.prototype.myFilter = function (callback) {  
  var array = this;
  // your code here
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers =  numericArray.myFilter(function(element){
    
    return element <= 5;
    
}) 