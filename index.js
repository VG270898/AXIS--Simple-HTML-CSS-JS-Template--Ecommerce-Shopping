function login(){
    window.location.href = "loginpage.html";
}

function authenticate(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    alert(username + password)
    if(username=="vishal1810051@gmail.com"){
        if(password=="vishal@123"){
            location.replace("home.html");
        }else{
            alert("Wrong Password");
        }
    }else{
        alert("Wrong Username");
    }
}


function register(){
    window.location.href = "UserLogin.jsp";
}

function loadviewpage(id){
    
    var image = document.querySelector("#"+id).querySelector(".product-image").src;
    var price = document.querySelector("#"+id).querySelector(".price");
    var itemname = document.querySelector("#"+id).querySelector(".itemname");
    var star = document.querySelector("#"+id).querySelector(".price").getElementsByTagName("i")
    let count=0;
    // for(let i=0;i<star.length;i++){
    //     if(star[i].getAttribute("class").split(" ")[0]=="fa"){
    //         count +=1;
    //     }
    // }
    // alert(count);
    window.location.href="productview.html?price="+price.textContent+"&image="+image+"&itemname="+itemname.textContent+"&star="+star;
    alert(price.textContent + itemname.textContent + image);        
}