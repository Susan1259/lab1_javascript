// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


function levelWidth(root) {
    const queue = [root];  
    const widths = [];     

    while (queue.length > 0) {  
        const qLen = queue.length;  
        const level = [];           
        
        for (let i = 0; i < qLen; i++) {
            const node = queue.shift();  
            
            if (node) {
                level.push(node.val);  
                
                const children = node.children;
                for (let j = 0; j < children.length; j++) {
                    queue.push(children[j]);  
                }
            }
        }

        if (level.length > 0) {  
            widths.push(level);
        }
    }
    const array_len=[];
    for (let i=0; i<widths.length;i++)
    {
        array_len.push(widths[i].length)
    }
    return array_len;
}

module.exports = levelWidth;
