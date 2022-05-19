
   let nums = [ [ 1, 2, 3 ],
                [ 4, 2, 6 ],
                [ 7, 4, 9 ] ];
   let max_size = nums[0].length;
    let v = [];                                
    for(let i = 0; i < 2 * max_size - 1; i++)
    {
        v.push([]);
    }
    for(let i = 0; i < nums[0].length; i++)
    {
        for(let j = 0; j < nums[0].length; j++)
        {
            v[i + j].push(nums[i][j]);
            
        }
        
    }
    console.log(v);
    v.sort();
    console.log(v);

    for(let i = 0; i < v.length; i++)
    {
        for(let j = v[i].length - 1;
                j >= 0; j--)
        {
           // console.log(v[i][j] + " ");
        }
    }
   
 

