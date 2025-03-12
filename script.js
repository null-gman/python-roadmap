(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
},{}],2:[function(require,module,exports){
document.body.onload = function() {
    document.body.style.display="block";
};



const content = {}
content.basics = ["Variables","Conditions","Chained Conditionals","Operateros","Control Flow(if/ele)","Loops And lterables","Basic Data Structures","Functions","Mutable VS immutable","Common Methods","File I/O"]
content.intermidiate = ["OOPs","Data Structures","OOPs","Data structures","Comprehensions","Lambdafun Functions","Map , Filter","Collections","*Args & **Kwargs","Inheritance","Dunder Methods","PIP","Environments","Modules","Async 10"]
content.expert = ["Decorators","Genrators","Context Managers","Metaclasses","Parallelism","Testing","packages","Cython"]



function main() {

    // localStorage.removeItem("webData");
    //for debuging
    const localStoreFun = require("./localStore.js");
    const isDataFound = localStoreFun.checkWebLocalStore();
    // console.log(isDataFound);
    if (!isDataFound) {
        localStoreFun.setWebLocalStoreForFristTime(content);
    }

    let data = localStoreFun.getWebLocalStoreData();
    data = JSON.parse(data);
    // console.log(data);

    const {renderTodos} = require("./render.js");
    renderTodos(data);
}



main();


},{"./localStore.js":1,"./render.js":3}],3:[function(require,module,exports){

    //   <div class="todo-element">
    //     <input  class="checkBoxTodo" type="checkbox">
    //     <p class="TodoContent">todo</p>                      
    // </div> 

function  inputCheckBoxTagEventOnClick(mainDiv,inputCheckBoxTag) {
    const {setNewValue,getWebLocalStoreData} = require("./localStore.js");

    const Data = JSON.parse(getWebLocalStoreData());

    const indexOfObj = +(mainDiv.dataset["index"]);

    console.log(indexOfObj);
    
    const newEleObj = {...Data[indexOfObj]};

    
    
    if (newEleObj.checked) {
        newEleObj.checked = false;
        mainDiv.classList.remove("todoDone"); 
        inputCheckBoxTag.removeAttribute("checked");
    }else{
        newEleObj.checked = true;
        mainDiv.classList.remove("todoDone"); //for doblaced
        mainDiv.classList.add("todoDone");
        inputCheckBoxTag.setAttribute("checked","true");
    }
    
    console.log(newEleObj);

    setNewValue(newEleObj,indexOfObj);
}


function createTodoRlementDom(elementObj,indexInData) {

    
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("todo-element");
    mainDiv.setAttribute("data-index",String(indexInData));

    const inputCheckBoxTag = document.createElement("input");
    inputCheckBoxTag.classList.add("checkBoxTodo");
    inputCheckBoxTag.setAttribute("type","checkbox");

    inputCheckBoxTag.addEventListener("click",()=>inputCheckBoxTagEventOnClick(mainDiv,inputCheckBoxTag))




    const pTodoContentTag = document.createElement("p");
    pTodoContentTag.classList.add("TodoContent");
    pTodoContentTag.innerText = elementObj.todoContent;

    mainDiv.appendChild(inputCheckBoxTag);
    mainDiv.appendChild(pTodoContentTag);


    if (elementObj.checked) {
        mainDiv.classList.add("todoDone");
        inputCheckBoxTag.setAttribute("checked","true");
    }

    return mainDiv;

}



function renderTodos(contentArr) {
    /* array of objects */

   for (const index in contentArr) {
    const TodoDom = createTodoRlementDom(contentArr[index],index);
    switch (contentArr[index].type) {
        case "basics":
            document.getElementById("basicsCon").appendChild(TodoDom);
            break;
        case "intermidiate":
            document.getElementById("intermidiateCon").appendChild(TodoDom);
            break;
        case "expert":
            document.getElementById("expertCon").appendChild(TodoDom);
            break;
        default:
            console.log(contentArr[index].type + "not valid type");
            return false
            break;
    }
   }
   return true;
}




module.exports = {renderTodos};
},{"./localStore.js":1}]},{},[2]);
