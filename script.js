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
    <input type="checkbox" id="task-check" />
    <span class="todo__text form__title">${taskName}</span>

  <div class="todo__btns">
    <button class="btn-edit">Edit</button>
    <button class="btn-delete">Delete</button>
  </div>
  <span></span>
</div>
`;

  taskContainer.insertAdjacentHTML("beforeend", task);

  //  When user press Enter
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("#todo__btn").click();
    }
  });

  const deleteButton = document.querySelectorAll(".btn-delete");
  deleteButton.forEach((button) => {
    button.onclick = () => {
      document.querySelector("#task-container").remove();
    };
  });

  // Editing task
  const editButton = document.querySelectorAll(".btn-edit");
  const editText = document.querySelector(".todo__text");
  editButton.addEventListener("click", () => {
    editText.setAttribute("contenteditable", "true");
  });
};

addTodo.addEventListener("click", addTask);
