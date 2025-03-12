
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