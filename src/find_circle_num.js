/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    
    let provinces = 0;
    
    const cleanConnection = (i) => {
        if ( ! isConnected[i] ) return;
        
        let city = isConnected[i];
        isConnected[i] = null;
        
        city.forEach( (connection , idx ) => {
            if ( connection === 0 ) return;
            cleanConnection(idx);
        })
        
    };
    
    for ( let i = 0; i < isConnected.length; i ++ ){
        if ( isConnected[i] ){
            provinces ++;
            cleanConnection(i);
        }
    }
    
    return provinces;
};