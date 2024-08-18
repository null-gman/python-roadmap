const content = {}
content.basics = ["Variables","Conditions","Chained Conditionals","Operateros","Control Flow(if/ele)","Loops And lterables","Basic Data Structures","Functions","Mutable VS immutable","Common Methods","File I/O"]
content.intermidiate = ["OOPs","Data Structures","OOPs","Data structures","Comprehensions","Lambdafun Functions","Map , Filter","Collections","*Args & **Kwargs","Inheritance","Dunder Methods","PIP","Environments","Modules","Async 10"]
content.expert = ["Decorators","Genrators","Context Managers","Metaclasses","Parallelism","Testing","packages","Cython"]




const fitstTime = function(){

    if (localStorage.getItem("first")){
        render()
        return;
    }

    localStorage.setItem("first","true") 
    let obj;
    function set(cat) {
        for (let i = 0; i < content[cat].length ; i++) {
            obj = {div : cat,ele : content[cat][i],bool : false};
            localStorage.setItem(index,JSON.stringify(obj)) 
            index++
        }
    }

    let index = 0 ;
    set("basics") 
    set("intermidiate") 
    set("expert") 
    localStorage.len =  index

    render()

}


const render = function(){
    let index = localStorage.getItem("len");
    for (let i = 0; i < index; i++) {
        localStorage.getItem(i)
        let ele = JSON.parse(localStorage.getItem(i))

        
        addContent(ele,i)
    }

};


const addContent = function (ele,i) {
    let box = "",
        cls = "element";

    if (ele.bool ) {
        box += "checked";
        cls += " check"
    }

    document.getElementById(ele.div).innerHTML+=`
    <div class="${cls}" >
        <input type="checkbox" onclick="checkbox(this,${i})" ${box}>
        <p>${ele.ele}</p>                      
    </div> 
    `;

}

const checkbox = function (ele,i) {
    let obj ;
    obj = localStorage.getItem(i);
    obj = JSON.parse(obj)
    obj.bool = ele.checked;
    setClass(ele,obj.bool)
    obj = JSON.stringify(obj)
    localStorage.setItem(i,obj)
}


const setClass = function (ele,bool) {
    console.log(ele.parentElement.classList);
    console.log(bool);
    
    if (bool) {
        ele.parentElement.classList.add("check")
    }else{
        ele.parentElement.classList.remove("check")
    }

}
















function main() {
    setRestHeight(); 
    fitstTime()
}

document.body.onload = () => {

    document.body.style.display="block";
    main()
}










//function 
function setRestHeight() {
    let index = document.getElementsByClassName("set").length,
        rest;
    for (let i = 0; i < index; i++) {
        let con = document.getElementById("con"+i),
            head = document.getElementById("hed"+i),
            ele = document.getElementById("ele"+i);
            rest = con.clientHeight - head.clientHeight
            ele.style.height = rest+"px";
    }

    document.body.onresize = () => {
        setRestHeight();
    }

}
