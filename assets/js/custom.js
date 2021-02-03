let note = document.getElementById('fa-music');

var i = 0;
function change() {
  var color = ["black", "blue", "brown", "green", "yellow", "orange", "red", "purple", "violet", "white"];
  note.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);