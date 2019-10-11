window.onload = function() {
  var toDoList = [];
  if (localStorage.getItem('task') != undefined) {
      toDoList = JSON.parse(localStorage.getItem('task'));
      outputList();
  }
  document.getElementById('addTask').onclick = function() {
      var newTask = document.getElementById('textOfNewTask').value;
      var taskElement = {};
      taskElement.task = newTask;
      toDoList[toDoList.length] = taskElement;
      outputList();
      localStorage.setItem('task', JSON.stringify(toDoList));
  }

  function outputList() {
      var container = document.getElementById('taskList');
      while (container.firstChild) {
          container.removeChild(container.firstChild);
      }
      for (var key in toDoList) {

          var div = document.createElement("div");
          var inputValue = toDoList[key].task;
          var textInDiv = document.createTextNode(inputValue);
          div.appendChild(textInDiv);

          var button = document.createElement("button");
          button.onclick = deleteTask
          var textDeleteButton = document.createTextNode('Удалить');
          button.appendChild(textDeleteButton);

          document.getElementById('taskList').appendChild(div).appendChild(button);
      }
  }

  function deleteTask() {
      this.parentNode.remove(this);
      //localStorage.removeItem();
      //Сделать удаление из localStorage, скорее всего придется присваивать 
      //оригинальные ключи
  }
}