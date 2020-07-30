const createForm = document.getElementById('create-form');
const updateForm = document.getElementById('update-form');
const deleteForm = document.getElementById('delete-form');
const todosDis = document.getElementById('todos-display');

getItems();

createForm.addEventListener('submit', (e)=>{
  let title = createForm.getElementsByTagName('input')[0].value;
  let date = createForm.getElementsByTagName('input')[1].value;
  let description = createForm.getElementsByTagName('input')[2].value;
  let finished = createForm.getElementsByTagName('input')[3].value;

  $.post("/toDos", {
    title:title,
    date:date,
    description,description,
    finished:finished
  }, (data, status)=>{
    getItems();
  });
});

updateForm.addEventListener('submit', (e)=>{
  let title = createForm.getElementsByTagName('input')[0].value;
  let date = createForm.getElementsByTagName('input')[1].value;
  let description = createForm.getElementsByTagName('input')[2].value;
  let finished = createForm.getElementsByTagName('input')[3].value;

  $.patch("/toDos", {
    title:title,
    date:date,
    description,description,
    finished:finished
  }, (data, status)=>{
    getItems();
  });
});

deleteForm.addEventListener('submit', (e)=>{
  let title = createForm.getElementsByTagName('input')[0].value;

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
    finished.innerHTML = "Finished: " + element.finished;

    li.appendChild(title);
    li.appendChild(date);
    li.appendChild(desc);
    li.appendChild(finished);
    todosDis.appendChild(li);
  });
  });
}