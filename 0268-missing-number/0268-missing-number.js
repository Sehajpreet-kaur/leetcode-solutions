/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var l= nums.length;
    return (misNum(nums,l));
};

var misNum = function(nums,l){
    var b=new Array(l+1)
   for(let i=0; i<l; i++){
     var a= nums[i];
     b[a]=true;
   }
  for(let i=0; i<=l; i++){
    if(b[i] != true){
      return i
    }
  }
}
