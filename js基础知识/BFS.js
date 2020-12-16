/**
 * DFS deep-first search
 * BFS Breadth-first search
 */


 let root = document.getElementById('root');

 function DeepFirst(node, nodeList){
    if(node){
        nodeList.push(node);
        var children =  node.children;
        for(let i = 0; i < children.length; i++){
            DeepFirst(children[i],nodeList);
        }
    }
    return nodeList;
 }

 let nodeList2 = DeepFirst(root, nodeList=[]);
 console.log(nodeList2)


 var nodes = [];
 function breadthFirst(node){
     var i = 0;
     if(!(node==null)){
         nodes.push(node);
         breadthFirst(node.nextElementSibling);
         node = nodes[i++];
         breadthFirst(node.firstElementChild);
     }
     return nodes;
 }
 function breadthFirst2(node){
     var nodes = [];
     if(node != null){
         var queue = [];
         queue.unshift(node);
         while(queue.length != 0){
             var item = queue.shift();
             nodes.push(item);
             var children = item.children;
             for(var i = 0; i < children.length; i++){
                 queue.push(children[i]);
             }
         }
     }
     return nodes;
 }
 console.log(breadthFirst2(root));