var node = {
    "name": "node 1",
    "children": [
        {
            "name": "node 2",
            "children": [
                {
                    "name": "node 4",
                    "children": [
                        {
                            "name": "name 5",
                            "children": []
                        },
                        {
                            "name": "name 6",
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "node 3",
            "children": []
        }
    ]
};




// node.reduce(function(){
//     [].concat(node.children);
// });
// console.log(node);

// since node is a plain object literal and node1's children is the array, in a tree structure, so you can't just iterate through the things in the objects

// also I guess the point of the exercise was just to list all the names

var names = [];

(function getNames(node) {
    names.push(node.name);

    for (var i = 0; i < node.children.length; i++) {
        getNames(node.children[i]);
    }
})(node);

console.log(names);



