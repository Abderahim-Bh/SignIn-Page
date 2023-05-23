
var myDiv1=document.getElementById("glassDiv1");
var myDiv2=document.getElementById("glassDiv2");
var myInputText=document.getElementById("inputText");
var myInputPassword=document.getElementById("inputPassword");
myInputText.onkeyup = function(){

    if(myInputText.value==="hamzA"){
        myDiv1.style.backgroundColor="green";
        myDiv1.style.width="10px";
        myDiv1.style.height="10px";
        myDiv1.style.boxShadow="0px 0px 10px rgba(0, 230, 64, 0.8),0px 0px 10px rgba(0, 230, 64, 0.8),0px 0px 5px rgba(0, 230, 64, 0.5)"
        
    }
    else if(myInputText.value===""){
        myDiv1.style.backgroundColor="transparent";
        myDiv1.style.boxShadow="0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else{
        myDiv1.style.backgroundColor="red";
        myDiv1.style.width="10px";
        myDiv1.style.height="10px";
        myDiv1.style.boxShadow="0px 0px 10px rgba(242, 38, 19, 0.8),0px 0px 10px rgba(242, 38, 19, 0.8),0px 0px 5px rgba(242, 38, 19, 0.5)"
        
    }



}