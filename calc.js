function DisplayNum(num){
    document.getElementById("screen").value += num;

}

function erase(){
    document.getElementById("screen").value = ""
}

function DisplayResult(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value)

}

