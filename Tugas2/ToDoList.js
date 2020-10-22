var listx = document.getElementsByTagName("LI");
var x;
for (x = 0; x < listx.length; x++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listx[x].appendChild(span);
}
var close = document.getElementsByClassName("close");
var x;
for (x = 0; x < close.length; x++) {
  close[x].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function toDo() {
  var li = document.createElement("li");
  var inputNilai = document.getElementById("inputan").value;
  var y = document.createTextNode(inputNilai);
  li.appendChild(y);
  if (inputNilai === '') {
    alert("Harap memasukkan sesuatu terlebih dahulu");
  } else {
    document.getElementById("data").appendChild(li);
  }
  document.getElementById("inputan").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (x = 0; x < close.length; x++) {
    close[x].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}