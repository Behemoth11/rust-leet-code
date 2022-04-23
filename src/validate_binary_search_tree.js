var isValidBST = function(root) {
    
    const main = ( root, min, max)=> {
        
        
        if ( root === null ){ return true; };

        if ( root.left && (root.left.val >= root.val || root.left.val <= min ) ){
            return false;
        }

        if ( root.right && (root.right.val <= root.val || root.right.val >= max ) ){
            return false;
        }
        
        return main(root.left, min , Math.min( max , root.val )) && 
               main( root.right, Math.max( min, root.val), max );
    }
    
    return main ( root, -(2 **31) - 1 , 2 ** 31)
};