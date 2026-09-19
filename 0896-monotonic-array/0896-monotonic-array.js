/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(isAsc(nums) || isDesc(nums)){
        return true;
    }
    else{
        return false;
    }
};
var isAsc = function(nums){
    var l=nums.length;
    var ans =true;
    for(let i=0; i<l-1; i++){
        if(nums[i] <= nums[i+1]){
            ans=ans && true;
        }
        else{
            ans=ans && false
        }
    }
    return ans;
}
var isDesc = function(nums){
    var l=nums.length;
    var ans= true;
    for(let i=0; i<l-1; i++){
        if(nums[i] >= nums[i+1]){
            ans=ans && true;
        }
        else{
            ans=ans && false
        }
    }
    return ans;
}