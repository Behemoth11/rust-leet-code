/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
    let result = [];
    
    const main  = (previous, left) => {
        if ( left[1] === 0 ){
            result.push( previous );
        }
        
        if ( left[0] !== 0 ){
            main( previous + "(" , [left[0] -1 , left[1]] )
        }
        
        if ( left[1] !== 0 && left[0]  < left[1] ) {
            main ( previous + ")", [left[0] , left[1] - 1]);
        }
    }
    
    main("", [n, n]);
    
    return result;
    
};