function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myTask").appendChild(li);
  document.getElementById("newTask").value = "";
}