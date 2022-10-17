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
    //location.replace("productview.html");
    // var image = document.querySelector("#"+id).getElementsById("#image");
    //alert("#"+id);
    var price = document.querySelector("#"+id).querySelector(".price");
    alert(price.textContent);
    //var itemname = document.querySelector("#"+id).querySelector(".titlename").value;

    
    // document.getElementById("pimage").src = image.value;
    //document.getElementById("pprice").innerHTML=price.textContent;
    // document.getElementById("pitemname").innerHTML=itemname.textContent;
    
}