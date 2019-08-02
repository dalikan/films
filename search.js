function randomize(min, max) {
    return Math.random() * (max - min) + min;
}
var each = document.getElementsByClassName("reco");



function random(){
for (var i =0; i<each.length;i++){
    each[i].style.display = "none";
}
each[Math.floor(randomize(0, each.length))].style.display = ""
};
var nom = document.getElementsByTagName("h3");
console.log(nom[2].innerHTML);

function searchm() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('sb');
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("reco");
    
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0];
      txtValue = a.innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
