// write js code here corresponding to favourites.html
var data=JSON.parse(localStorage.getItem("favourites"))||[];
displaydata(data);
function displaydata(data){
    data.forEach(function(elem){
        tr=document.createElement("tr")
       var td1=document.createElement("td")
       td1.innerText=elem.matchno;
       var td2=document.createElement("td")
       td2.innerText=elem.TeamA;
        td3=document.createElement("td")
       td2.innerText=elem.TeamB;
       var td4=document.createElement("td")
       td4.innerText=elem.date;
       var td5=document.createElement("td")
       td5.innerText=elem.place;
       var td6=document.createElement("td")
       td6.innerText="Delete";

       td6.addEventListener("click",function(){
           del(elem);
       
   });
   tr.append(td1,td2,td3,td4,td5,td6);
       document.querySelector("tbody").append(tr);

   })
}
}