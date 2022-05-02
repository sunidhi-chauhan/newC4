// write js code here corresponding to matches.html
var data=JSON.parse(localStorage.getItem("schedule"))||[];
displaydata(data);
function displaydata(data){
    data.forEach(function(elem){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=elem.matchno;
        var td2=document.createElement("td")
        td2.innerText=elem.TeamA;
        var td3=document.createElement("td")
        td2.innerText=elem.TeamB;
        var td4=document.createElement("td")
        td4.innerText=elem.date;
        var td5=document.createElement("td")
        td5.innerText=elem.place;
        var td6=document.createElement("td")
        td6.innerText="Favourites";
        td6.style.color="green";


        td6.addEventListener("click",function(){
            fav(elem);
        });
        // td5.addEventListener("click",function(){
        //     venue(elem);
        // });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    })
}
var favarr=JSON.parse(localStorage.getItem("favourites"))||[];
function fav(elem){
    var data=elem;
    favarr.push(data);
    localStorage.setItem("favourites",JSON.stringify(favarr));

}