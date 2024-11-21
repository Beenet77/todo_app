// console.log("Hello World");
// setTimeout(() => {
//   console.log("Hello World 2");
// }, 2000);

// Promise.resolve().then(() => {
//   console.log("Promise resolved");
// });

// console.log("Hello World 4");

// const tasklist = document.getElementById("tasklist");
// const taskinput = document.getElementById("taskinput");

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// //async function for adding task
// async function addTask() {
//   const taskText = taskinput.value.trim();
//   if (taskText === "") return;

//   taskinput.value = "";

//   await delay(500);

//   //creating new task
//   const listItem = document.createElement("li");
//   listItem.textContent = taskText;

//   //adding a delete button
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = -"Delete";
//   deleteButton.onclick = () => deleteTask(listItem);

//   listItem.appendChild(deleteButton);
//   tasklist.appendChild(listItem);
// }

// //deleting a task
// async function deleteTask(taskItem) {
//   await delay(2000);
//   taskItem.remove();
// }
fetch("https://fakestoreapi.com/abc")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network Error");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
