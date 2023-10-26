// const form = document.querySelector("#form");
// const todoInput = document.querySelector("#todo-input");

// form.addEventListener("submit", function () {
//   console.log("Submit");
// });

const addTodo = document.querySelector("#todo__btn");
const taskInput = document.querySelector("#todo-input");
const taskContainer = document.querySelector(".tasks-list");
const error = document.getElementById("error");

const addTask = () => {
  const taskName = taskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `
  <div id="task-container">
    <input type="radio" id="todo-item" />
    <span class="todo__text form__title">${taskName}</span>

  <div class="todo__btns">
    <button class="btn-edit">Edit</button>
    <button class="btn-delete">Delete</button>
  </div>
  <span></span>
</div>
`;

  taskContainer.insertAdjacentHTML("beforeend", task);
};

addTodo.addEventListener("click", addTask);
