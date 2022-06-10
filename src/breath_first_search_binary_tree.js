var breathFirstSearch = function(root) {
    
    let queue = [root];
    let node;
    
    while ( queue.length > 0 ){
        let len = queue.length;
        
        console.log( queue.map( node => node.val ))
        for ( let i = 0; i < len  ; i ++ ) {
            node = queue.shift();
            
            node.left && queue.push( node.left  );
            node.right && queue.push( node.right );
        };
    };
    
   return false
};