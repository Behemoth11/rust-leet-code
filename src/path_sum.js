var hasPathSum = function(root, target_sum ) {
    
    if ( !root ) { return false};
    
    const main = ( root , previous_sum ) => {

        let current_sum = previous_sum + root.val
        
        if ( !root.left  && !root.right ){
            return current_sum === target_sum ? true : false;
        }
        
        if ( root.left && main ( root.left , current_sum ) ||
             root.right && main ( root.right , current_sum ) )
        {
            return true ;
        }
        
        return false;
        
    }
    
    return main ( root,  0 );
};