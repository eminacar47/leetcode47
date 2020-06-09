var permuteUnique = function (nums) {
    let ansTotal = {};
    
    function rec(arr,acc) {
        if (acc.length == nums.length) {          
            ansTotal[acc.join(',')] = acc;
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];            
            let arr2 = [...arr];
            arr2.splice(i, 1);
            let acc2 = [num,...acc];
            rec(arr2, acc2);
           
        }
    }

    rec(nums, []);

    return Object.values(ansTotal);
};
