var url_string = window.location.href;
var url = new URL(url_string);
var image = url.searchParams.get("image");
var price = url.searchParams.get("price");
var itemname = url.searchParams.get("itemname");
var star = url.searchParams.get("star");

document.getElementById("pprice").innerHTML=price; 
document.getElementById("pimage").src=image;
document.getElementById("pitemname").innerHTML=itemname;
// alert();
// for(let i=0;i<star.length;i++){
//     var tag = document.createElement("i");
//     var attr = document.createAttribute("class");
//     attr.value("fa fa-star");
//     tag.setAttribute(attr);
//     var element = document.getElementById("pstar");
//     element.appendChild(tag);
// }
