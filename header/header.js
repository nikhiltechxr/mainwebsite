function hamburger(){
    let x=document.getElementById('menubar');
    console.log(x);
    if (x.style.display="None"){
        x.style.display="inline-block";
    }
    else if(x.style.display!="None"){
        console.log("dfjs")
        x.style.display=None;
    }

}