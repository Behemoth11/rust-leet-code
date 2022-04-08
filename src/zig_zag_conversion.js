/**
 * 
 * zizag conversioin {@link https://leetcode.com/problems/zigzag-conversion/}
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    
    if ( s.length  <= numRows  ) { return s};
    if (numRows === 1 ) { return s}
    
    
    let new_string = "";
    
    let head = 0;
    let row = numRows - 1;
    
    
    while (row >= 0 ){
        new_string = new_string + s[head];

        if ( row != numRows -1  && row != 0 && head + row  * 2 < s.length ){
            new_string = new_string + s[ head + row * 2 ]
        }
        
        head = head + ( numRows - 1) * 2; 
        
        if ( head >= s.length){ 
            row = row - 1;
            head = numRows - row - 1 ;
        }
        
    }
    
    return new_string;
    
};