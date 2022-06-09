/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let tree = {
  val: 5,
  left: {
    val: 2,
    left: { val: 1 },
    right: { val: 3 },
  },
  right: {
    val: 7,
    left: { val: 6 },
    right: { val: 8 },
  },
};

const cloneBST = (root, val) => {
  let target;
  let newRoot;

  const main = (node, val) => {
    if (!node) return null;

    const head = new TreeNode(node.val);

    if (!newRoot) newRoot = head;

    head.left = main(node.left, val);
    head.right = main(node.right, val);

    if (head.val === val) {
      target = head;
    }

    return head;
  };

  return [main(root, val), target];
};

const showBST = (tree) => {
  let str = "";

  const main = (node) => {
    if (!node) return;

    main(node.left);

    str += node.val + " ";

    main(node.right);
  };

  main(tree);
  return str;
};

// console.log(showBST(tree), "/", showBST(cloneBST(tree)[0]));

// console.log(showBST(cloneBST(tree)[0]), cloneBST(tree, 7)[1].val);

var generateTrees = function (n) {
  let result = [];

  const main = (min, max, head, currentVal, nodes) => {

    let side = "right";
    if (max < currentVal) side = "left";

    for (let i = min; i <= max; i++) {
      const newNode = new TreeNode(i);
      
      let [clone, target] = cloneBST(head, currentVal);
      target[side] = newNode;
      
      if (nodes + 1 >= n ) {
          
          result.push(clone);
          return;
        }
    if (head.val ===2) { console.log( target )}

      main(min, i - 1, clone, i, nodes + 1);
      main(i + 1, max, clone, i, nodes + 1);
    }

  };

  for (let i = 1; i <= n; i++) {
      let node = new TreeNode(i);

    main(1, i - 1, node, i, 1);
    main(i + 1, n, node, i, 1);
  }

  return result;
};

console.log(generateTrees(3).length);
