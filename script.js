// function ranch(arr){
//     const randind = Math.floor(Math.random()*arr.length);
//     const item =  arr[randind];
//     return item;
var l = document.getElementById("box");
var relo = document.getElementById("reload");
var dataelm=document.querySelectorAll("td");
const arr=['Rock','Paper','Scissor'];
var k =-1;
var count=0;
var cc=0;
var cu=0;
document.getElementById("reload").hidden = true;

g = document.getElementById("gif");
function timo(){
// l.style.display = "none";
l.hidden = true;
document.getElementById("reload").hidden = false;
}

// }
function iot(){
  return ranch(arr);
}
function ranch(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
var tem=0;

function r(){
    count+=1;
    l.hidden = false;
   let user = 1;
    k=iot();
    if(count<=3){
        show(user);
    }
}
function p(){
    count+=1;
    l.hidden = false;
   let user = 2;
    k=iot();
    if(count<=3){
        show(user);
    }
}
function s(){
    count+=1;
    l.hidden = false;
   let user = 3;
    k=iot();
    if(count<=3){
        show(user);
    }
}
function relooad(){
    // count=0;
    // cc=0;
    // cu=0;
    // dataelm[0].innerHTML = cc;
    // dataelm[1].innerHTML = cu;
    // document.getElementById("box").innerHTML="";
    // document.getElementById("box").hidden = true;
    // g.style.display = "none";
    // document.getElementById("reload").hidden = true;
    // r.hidden=true;
    location.reload();
    return false;
}
function show(user)
{
    
    let u = arr[user-1];

    document.getElementById("box").innerHTML+="<br><br>User's choice: "+ u+"<br>";
    document.getElementById("box").innerHTML+="Computer's choice: "+ k+"<br>";
    if(u=="Rock"){
        if(k==arr[0]){
           //  console.log("Draw!");
           document.getElementById("box").innerHTML+="<br> Draw";
           cc++; cu++;
            dataelm[0].innerHTML = cc;
            dataelm[1].innerHTML = cu;
        }
        else if(k==arr[1]){
            // console.log("Computer won!");
            document.getElementById("box").innerHTML+="<br> Computer won!";
            cc++;
            dataelm[0].innerHTML = cc;
            // dataelm[1].innerHTML = cu;
        }
        else{
            // console.log("User won!");
            document.getElementById("box").innerHTML+="<br> User won!";
            cu++;
            // dataelm[0].innerHTML = cc;
            dataelm[1].innerHTML = cu;
        }
    }
    else if(u=="Paper"){
        if(k==arr[0]){
            // console.log("User won!");
            document.getElementById("box").innerHTML+="<br> User won!";
            cu++;
            // dataelm[0].innerHTML = cc;
            dataelm[1].innerHTML = cu;
        }
        else if(k==arr[1]){
            // console.log("Draw!");
            document.getElementById("box").innerHTML+="<br> Draw";
            cu++; cc++;
            dataelm[0].innerHTML = cc;
            dataelm[1].innerHTML = cu;
        }
        else{
            // console.log("Computer won!");
            document.getElementById("box").innerHTML+="<br> Computer won!";
            cc++;
            dataelm[0].innerHTML = cc;
            // dataelm[1].innerHTML = cu;
        }
    }
    else{
        if(k==arr[0]){
            // console.log("Computer won!");
            document.getElementById("box").innerHTML+="<br> Computer won!";
            cc++;
            dataelm[0].innerHTML = cc;
            // dataelm[1].innerHTML = cu;
        }
        else if(k==arr[1]){
            // console.log("User won!");
            document.getElementById("box").innerHTML+="<br> User won!";
            cu++;
            // dataelm[0].innerHTML = cc;
            dataelm[1].innerHTML = cu;
        }
        else{
            // console.log("Draw!");
            document.getElementById("box").innerHTML+="<br> Draw";
            cc++; cu++;
            dataelm[0].innerHTML = cc;
            dataelm[1].innerHTML = cu;
        }
    }
    if(count>=3){
        r = document.getElementById("result");
        r.hidden= false;
        if(cc>cu){
            r.innerHTML = "Computer Won!"
            // l.style.display = "none";
            setTimeout(timo,3000);
           g.innerHTML="<img src=\'https://media1.giphy.com/media/SIPIe590rx6iA/giphy.webp?cid=ecf05e47jsfnpgdkkaaiyx5dqw53cpv0w3cd2y02487roeey&ep=v1_gifs_search&rid=giphy.webp&ct=g\'>";
           g.style.display = "block";
        }
        else if(cc<cu){
            r.innerHTML = "User Won!"
            g.style.display = "block";
            // l.style.display = "none";
            setTimeout(timo,3000);
            g.innerHTML="<img src=\'https://media.tenor.com/UJakVJChQGEAAAAj/quickbooks-backing-you.gif\'>";
            g.style.display = "block";
        }
        else{
            r.innerHTML = "Match Draw!"
            // l.style.display = "none";

            setTimeout(timo,3000);
            g.innerHTML="<img src=\'https://media.tenor.com/mFYsjkPJ_TwAAAAi/%E5%BC%95%E3%81%8D%E5%88%86%E3%81%91-draw.gif\'>";
            g.style.display = "block";
        }
    }
    
}



