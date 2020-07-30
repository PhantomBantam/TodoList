const form = document.getElementById('todo-form')
const todosDis = document.getElementById('todos-display');

getItems();

form.addEventListener('submit', (e)=>{
  let title = form.getElementsByTagName('input')[0].value;
  let date = form.getElementsByTagName('input')[1].value;
  let description = form.getElementsByTagName('input')[2].value;
  let finished = form.getElementsByTagName('input')[3].value;

  $.post("/toDos", {
    title:title,
    date:date,
    description,description,
    finished:finished
  }, (data, status)=>{
    getItems();
  });
});

function getItems(){
  $.get("/toDos", (data, status)=>{
      
    todosDis.innerHTML = '';

  data.forEach(element => {
    let li = document.createElement('li');

    let title = document.createElement('h4');
    let date = document.createElement('h4');
    let desc = document.createElement('h4');
    let finished = document.createElement('h4');

    title.innerHTML = "Title: " + element.title;
    date.innerHTML = "Date: " + element.date;
    desc.innerHTML = "Description: " + element.description;
    finished.innerHTML = "finished: " + element.finished;

    li.appendChild(title);
    li.appendChild(date);
    li.appendChild(desc);
    li.appendChild(finished);
    todosDis.appendChild(li);
  });
  });
}