var twoSum = function(nums, target) {
    let cache = {};
    
    for (let i = 0 ; i < nums.length; i++ ){        
        let complementIdx = cache[ target - nums[i]] ;
        if (complementIdx !== undefined ){
            return [i, complementIdx];
        }
        
        cache[nums[i]] = i;
    }
};