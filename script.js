

function setRestHeight(A,B,C) {
    let index = document.getElementsByClassName("set").length,
        rest;
    for (let i = 0; i < index; i++) {
        let con = document.getElementById("con"+i),
            head = document.getElementById("hed"+i),
            ele = document.getElementById("ele"+i);

            rest = con.clientHeight - head.clientHeight
            ele.style.height = rest+"px";
    }

}



document.body.onload = ()=>{
    setRestHeight();
    document.body.onresize = () => {
        setRestHeight();
    }
    document.body.style.display="block";
}

