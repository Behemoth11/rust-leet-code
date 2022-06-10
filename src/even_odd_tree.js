/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isEvenOddTree = function(root) {
    
    let queue = [root];
    let node;
    
    let even = true;
    while ( queue.length > 0 ){
        let len = queue.length;
        
        let prev = null ;
        for ( let i = 0; i < len  ; i ++ ) {
            node = queue.shift();
                        
            if ( even && ( node.val % 2 === 0 || ( prev !== null && prev.val >= node.val ))) return false;
            if ( !even && ( node.val % 2 !== 0  || ( prev !== null && prev.val <= node.val ))) return false;
            
            prev = node;
            
            node.left && queue.push( node.left  );
            node.right && queue.push( node.right );
        };
        
        even = !even;
    };
    
   return true
};