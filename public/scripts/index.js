const form = document.getElementById('todo-form')
const getBtn = document.getElementById('get-btn');
const todosDis = document.getElementById('todos-display');

getBtn.addEventListener('click', (e)=>{
  $.get("/toDos", (data, status)=>{
    data.forEach(element => {
      console.log(element);
    });
  })
});

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
  console.log(data);
  });
});
