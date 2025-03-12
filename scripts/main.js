document.body.onload = function() {
    document.body.style.display="block";
};



const content = {}
content.basics = ["Variables","Conditions","Chained Conditionals","Operateros","Control Flow(if/ele)","Loops And lterables","Basic Data Structures","Functions","Mutable VS immutable","Common Methods","File I/O"]
content.intermidiate = ["OOPs","Data Structures","OOPs","Data structures","Comprehensions","Lambdafun Functions","Map , Filter","Collections","*Args & **Kwargs","Inheritance","Dunder Methods","PIP","Environments","Modules","Async 10"]
content.expert = ["Decorators","Genrators","Context Managers","Metaclasses","Parallelism","Testing","packages","Cython"]



function main() {
    /*for debuging*/
    // localStorage.removeItem("webData");
    /*for debuging*/

    const localStoreFun = require("./localStore.js");
    const isDataFound = localStoreFun.checkWebLocalStore();

    if (!isDataFound) {
        localStoreFun.setWebLocalStoreForFristTime(content);
    }

    let data = localStoreFun.getWebLocalStoreData();
    data = JSON.parse(data);


    const {renderTodos} = require("./render.js");
    renderTodos(data);
}



main();

