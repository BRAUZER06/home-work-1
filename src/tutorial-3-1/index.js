let input = document.querySelector("#input");
let addTask = document.querySelector("#addBtn");
let tasks_div = document.querySelector("#tasks");
let span = document.querySelector(".span");

let tasks = [];
// let tasksTrackDown =[]

// for(let i =0; i<tasks.length;i++){
//   if(tasks.length === tasksTrackDown.length){

//   }
// }

function render() {
  tasks_div.innerHTML = "";

  tasks.forEach((element, i) => {
    tasks_div.innerHTML += `<div class="task ${
      element.completed && "completed"
    }">
    ${element.text}
    <div class="bnts">
      <input id='${i}'  type="checkbox" ${element.completed && "checked"}/>
      <img id='${i}delete-btn' class="delete-btn" src="https://img.icons8.com/office/16/000000/delete-sign.png" />
    </div>
  </div>`;
  });
}

function numbersTask() {
  span.innerHTML = `Всего задач: ${tasks.length}`;
}

addTask.addEventListener("click", () => {
  tasks.push({ text: input.value, completed: false });
  if (input.value == "") {
    alert("Поле пустое");
    tasks.pop(); //я знаю что можно сделать по-другому. Но хотелось бы пока-что оставить это, и реализовать другой функцинал ) p.s который я кста не реализовал ))
  }
  input.value = "";
  render();

  numbersTask();
  // let tasksTrackDown = tasks.slice()
  // console.log(tasksTrackDown);
});

tasks_div.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    tasks[e.target.id].completed = !tasks[e.target.id].completed;
  } else if (e.target.className === "delete-btn") {
    console.log(e.target.id[0]);
    tasks.splice(e.target.id[0], 1);
  }
  render();
  numbersTask();
});
