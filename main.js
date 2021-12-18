function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("DATA.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
})
function display(mb){
 var deck=document.querySelector(".card-deck")
 console.log(deck)

 for(var i in mb)
 
    // console.log(mb[i].name)
     var caddiv=document.createElement("div")
     caddiv.classList.add("div")
     var cading=Document.createElement("img")
     cading.src=mb[i].img
    caddiv.appendChild(cading)
    deck.appendChild(caddiv)
    
    // name area
    var cname=document.createElement("h2")
    cname.textContent=mb[i].name;
    caddiv.appendChild(cname)
    // rate area
    var rate=document.createElement("h3")
    rate.textContent=mb[i].rate;
    caddiv.appendChild(rate)
    // offer area
    var offer=document.createElement("h3")
    offer.textContent="off/-"+mb[i].offer;
    caddiv.appendChild(offer)
    // button area
    var btn=document.createElement("button")
    btn.classList.add("btn-danger")
    btn.textContent=mb[i].button;
    caddiv.appendChild(btn)
    
 }