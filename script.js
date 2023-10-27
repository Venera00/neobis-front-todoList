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

  const deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
    };
  });

  const editButton = document.querySelectorAll(".btn-edit");
  editButton.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "btn-edit")) {
        targetElement = e.target.parentElement;
      }
      taskInput.value = targetElement.previousElementSibling.innerText;
      targetElement.parentNode.remove();
    };
  });

  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.onChange = () => {
      checkBox.nextElementSibling.classList.toggle("completed");
    };
  });
  taskInput.value = "";
};

addTodo.addEventListener("click", addTask);
