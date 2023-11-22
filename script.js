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
  if (taskName) {
    taskInput.value = "";
  }

  const task = `
  <div class="task-container">
    <div class = "task-input">
      <input type="checkbox" class="task-check" />
      <span class = "checkmark ${chooseCategory()}"> </span>
    </div>
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
      addTodo.click();
    }
  });

  const deleteButton = document.querySelectorAll(".btn-delete");
  deleteButton.forEach((button) => {
    button.onclick = () => {
      document.querySelector(".task-container").remove();
    };
  });

  const editButton = document.querySelectorAll(".btn-edit");
  editButton.forEach((button) => {
    button.addEventListener("click", () => {
      const taskText = button
        .closest(".task-container")
        .querySelector(".todo__text");

      taskText.setAttribute("contenteditable", "true");

      taskText.addEventListener("blur", () => {
        taskText.setAttribute("contenteditable", "false");
      });
    });
  });
};

addTodo.addEventListener("click", addTask);
editButton.addEventListener("click", editTask());

function chooseCategory() {
  if (document.querySelector(".form__personal").checked) {
    return "personal";
  } else if (document.querySelector(".form__business").checked) {
    return "business";
  }
}

let done = document.querySelector(".task-input");
done.addEventListener("click", function () {
  this.classList.toggle("toggled");
});
