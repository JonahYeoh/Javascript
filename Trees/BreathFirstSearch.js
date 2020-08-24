function create_node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function insert_node(root_node, new_node) {
    if (root_node == undefined)
        return new_node;
    if (root_node.value > new_node.value)
        root_node.left = insert_node(root_node.left, new_node);
    else if (root_node.value < new_node.value)
        root_node.right = insert_node(root_node.right, new_node);
    else
        console.log("Duplication detected");
    return root_node;
}

function bfs_find(root_node, target) {
    if (root_node == undefined)
        return null;
    var queue = [];
    queue.push(root_node);
    while (queue.length != 0) {
        let current = queue.shift();
        if (current.value == target)
            return current;
        if (current.left != null)
            queue.push(current.left);
        if (current.right != null)
            queue.push(current.right)
    }
}
let root;
let data = [98, 100, 77, 33, 38, 21, 9];
while (data.length > 0) {
    let data_point = data.shift();
    let data_node = new create_node(data_point);
    root = insert_node(root, data_node);
}
const target = Math.round(Math.random() * 100);
console.log(target);
let result = bfs_find(root, target);
if (result != null)
    console.log(result.value);
else
    console.log("none");
