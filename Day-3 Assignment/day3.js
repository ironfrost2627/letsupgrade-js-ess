function pagebtn(){
    console.log("Application Started");
    let name=document.querySelector('#inp1').value;
    let city=document.querySelector('#inp2').value;
    document.querySelector("#cont").innerHTML=`Your name is ${name}<br/> and Your City is ${city} <br/>Thank you !`;
}

