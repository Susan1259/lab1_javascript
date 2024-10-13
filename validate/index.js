// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


function validate(node, min = null, max = null) {
    if (node === null) {
        return true;
    }
    if (min !== null && node.value <= min) {
        return false;
    }
    if (max !== null && node.data >= max) {
        return false;
    }
    const isLeftValid = validate(node.left, min, node.data);
    const isRightValid = validate(node.right, node.value, max);

    return isLeftValid && isRightValid;
}

module.exports = validate;
