var a;
{
    let a = 10;
    console.log(a)
}
// let a = 10;
const marks = [10,20,40]
marks[1] = 20

console.log(typeof(a))

function typeText(){
   var input =  document.getElementById("input").value
   document.getElementById("text").innerText = input
}
//Count words
       function wordCount() {
        document.getElementById("count").innerText = document.getElementById("input").value.length+1;
       }
     


function ToggleColor()   {  //defination

    //implementation 
    if( document.getElementById('p1').style.color == 'red'){
        document.getElementById('p1').style.color='black'
    }else{
        document.getElementById('p1').style.color='red'
    }
    
}

var paragraph = document.getElementsByTagName("p")
paragraph[0].style = "color:red"
paragraph[1].style = "color:red"
paragraph[2].style = "color:red"
paragraph[3].style = "color:red"

let opreation;
function selectOpreation(e){
    opreation  = e.target.value
}

function calculate(){

    let num1  = document.getElementById("num1").value
    let num2  = document.getElementById("num2").value
    let expression = num1 + opreation + num2
    let result = eval(expression)
    document.getElementById("output").innerText = result
}


//<------------------*******************For Calculator-----------------************************>
// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculator() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}



// function print(e){
//     let inp = e.target.innerText
//     if(inp == '='){
//         document.getElementById("out").value = eval(document.getElementById("inp").value)    
//     }
//     document.getElementById("inp").value =  document.getElementById("inp").value  + inp
// }


const names = ["shahan","ali","usman","ahmed"]
// let users = new Array("shahan","ali")
names[0] = "new names"
names.forEach((item) => {

    console.log(item)
})

// const marks = [10,21,31,41]

const student1 = [];
student1["english"] = 5
student1["urdu"] = 21


const student2 = [];
student2["english"] = 10
student2["urdu"] = 21

const key = "urdu"
const subjectTotal = 30

const avg = new Array(student1,student2).reduce((number, student)=>{
        return number + student[key]
},0)/(subjectTotal * 2 ) * 100 

console.log(`${avg}%`);

// //5 + 10 / 20  * 100 = 100%

// console.log(subjectMarks);

// document.getElementById("array").innerText = names[0]
