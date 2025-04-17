function calculate(operation){
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    var result;


if(operation=='Add'){
    result=num1+num2;
    document.getElementById('result').innerText='Result:'+result;
}

else if(operation=='Substract'){
    result=num1-num2;
    document.getElementById('result').innerText='Result:'+result;
}
else if(operation=='Multiply'){
    result=num1*num2;
    document.getElementById('result').innerText='Result:'+result;
}
else if(operation=='Divide'){
    if(num2==0){
        document.getElementById('result').innerText='Cannot divided by zero!'
    }
    else{
    result=num1/num2;
    document.getElementById('result').innerText='Result:'+result;
}
}
}

