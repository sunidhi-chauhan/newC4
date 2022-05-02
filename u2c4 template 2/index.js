// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchdata);
var matchdata=JSON.parse(localStorage.getItem("schedule"))||[];
function matchdata(){
    event.preventDefault();
    var obj={
  matchno:masaiForm.matchNum.value,
  TeamA:masaiForm.teamA.value,
  TeamB:masaiForm.teamB.value,
  date:masaiForm.date.value,
  place:masaiForm.venue.value,
    };
    matchdata.push(obj);
    localStorage.setItem("schedule",JSON.stringify(matchdata));

}