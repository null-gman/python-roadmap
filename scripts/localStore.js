
const checkWebLocalStore = function(){

    if (!localStorage.getItem("webData")){

        return false;
    }
    return true;
}




/*

const content = {}
content.basics = ["Variables","Conditions","Chained Conditionals","Operateros","Control Flow(if/ele)","Loops And lterables","Basic Data Structures","Functions","Mutable VS immutable","Common Methods","File I/O"]
content.intermidiate = ["OOPs","Data Structures","OOPs","Data structures","Comprehensions","Lambdafun Functions","Map , Filter","Collections","*Args & **Kwargs","Inheritance","Dunder Methods","PIP","Environments","Modules","Async 10"]
content.expert = ["Decorators","Genrators","Context Managers","Metaclasses","Parallelism","Testing","packages","Cython"]

*/

function setWebLocalStoreForFristTime(content) {
    /* content is an object {[],[],[]} */
    //type , todo-content - checked ?

    const webDataObj = [];
    
    for (const element in content) {
            for (const eachTodo of content[element]) {
                const todoObj = {type :element , todoContent : eachTodo ,checked : false }
                webDataObj.push(todoObj);

            }
    }


    // console.log(webDataObj);
    
    localStorage.setItem("webData",JSON.stringify(webDataObj));    
}



function getWebLocalStoreData() {
    return localStorage.getItem("webData");
}


function setNewValue(eleObj,indexOfObj) {
    const data = JSON.parse(getWebLocalStoreData());
    console.log(data);
    
    data[indexOfObj] = {...eleObj};
    
    console.log(data);
    
    const newData = JSON.stringify(data);

    localStorage.setItem("webData",newData);    
}

module.exports = {checkWebLocalStore,setWebLocalStoreForFristTime,getWebLocalStoreData,setNewValue};