
let input = document.querySelector('#input');
let addTask = document.querySelector('#addBtn');
let tasks_div = document.querySelector('#tasks');

let tasks = [
  { text: 'Купить пиццу', completed: true },
  { text: '12', completed: true },
];

function handleClickAdd() {
  tasks_div.innerHTML = '';

  tasks.forEach((element, i) => {
    tasks_div.innerHTML += `<div class="task ${element.completed && 'completed'}">
    ${element.text}
    <div class="bnts">
      <input id='${i}'  type="checkbox" ${element.completed && 'checked'}/>
      <img id='${i}delete-btn' class="delete-btn" src="https://img.icons8.com/office/16/000000/delete-sign.png" />
    </div>
  </div>`;
  });  
  

}

handleClickAdd();

addTask.addEventListener('click', () => {
  tasks.push({ text:  input.value, completed: false });
  handleClickAdd();
});

tasks_div.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') {
    tasks[e.target.id].completed = !tasks[e.target.id].completed;
  } else if (e.target.className === 'delete-btn') {
    console.log(e.target.id[0]);
    tasks.splice(e.target.id[0], 1);
  }
  handleClickAdd();
});




