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
    finished:finished,
  }, (data, status)=>{
    getItems();
  });
});

updateForm.addEventListener('submit', (e)=>{
  let title = updateForm.getElementsByTagName('input')[0].value;
  let date = updateForm.getElementsByTagName('input')[1].value;
  let description = updateForm.getElementsByTagName('input')[2].value;
  let finished = updateForm.getElementsByTagName('input')[3].value;

  $.ajax({
    url : "/toDos",
    type : 'PATCH',
    data :  {
      title:title,
      date:date,
      description,description,
      finished:finished,
    },
    success : function(response, textStatus, jqXhr) {
        console.log("Successfully Patched!");
    },
    error : function(jqXHR, textStatus, errorThrown) {
        // log the error to the console
        console.log("The following error occured: " + textStatus, errorThrown);
    },
    complete : function() {
        console.log("Patch Ran");
    }
  });
});

deleteForm.addEventListener('submit', (e)=>{
  let title = deleteForm.getElementsByTagName('input')[0].value;

  $.ajax({
    url : "/toDos",
    type : 'DELETE',
    data :  {
      title:title,
    },
    success : function(response, textStatus, jqXhr) {
        console.log("Successfully Deleted!");
    },
    error : function(jqXHR, textStatus, errorThrown) {
        // log the error to the console
        console.log("The following error occured: " + textStatus, errorThrown);
    },
    complete : function() {
        console.log("Deleted Ran");
    }
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