var searchInsert = function(nums, target) {
    let len = nums.length;
    
    let right_bound = len -1;
    let left_bound = 0;
    
    while ( right_bound >= left_bound){
        let pointer = Math.floor( (right_bound + left_bound) / 2 );
        
        let num  = nums[pointer];
        
        if (num < target){
            left_bound = pointer + 1;
        } else if (num > target){
            right_bound = pointer - 1;
        } else {
            return pointer;
        }
        
    } 
    
    return left_bound;
    
};