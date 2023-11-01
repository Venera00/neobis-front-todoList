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

  // Editing task   KAIRAT CAN YOU CHECK HERE PLS
  const editButton = document.querySelectorAll(".btn-edit");
  const taskText = document.querySelectorAll(".todo__text");
  editButton.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "btn-edit")) {
        targetElement = e.target.parentElement;
      }
      taskInput.value = targetElement.previousElementSibling?.innerText;
      // targetElement.parentNode.remove();
    };
  });

  // function editTask(event) {
  //   let item = event.target.innerHTML;
  //   let itemInput = document.createElement("input");
  //   itemInput.type = "text";
  //   itemInput.value = item;
  //   itemInput.classList.add("edit");
  //   itemInput.addEventListener("keypress", saveTask);
  //   itemInput.addEventListener("click", saveTask);
  //   event.target.parentNode.prepend(itemInput);
  //   event.target.remove();
  //   itemInput.select();
  // }

  // function saveTask(event) {
  //   // let inputValue = event.target.value;
  //   if (
  //     event.target.value.length > 0 &&
  //     (event.keyCode === 13 || event.type === "click")
  //   ) {
  //     let li = document.createElement("li");
  //     li.addEventListener("click", editTask);
  //     li.textContent = event.target.value;
  //     event.target.parentNode.prepend(li);
  //     event.target.remove;
  //   }
  // }
};

addTodo.addEventListener("click", addTask);
editButton.addEventListener("click", editTask());

function chooseCategory() {
  if (document.getElementById("form__personal").checked) {
    return "personal";
  }
}
