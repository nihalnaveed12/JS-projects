let todo = document.getElementById("todo");
let add = document.getElementById("add");
let list = document.getElementById("list")


add.addEventListener("click",
function() {
  if (todo.value === "") {
    alert("Please Enter Your To-Do");
  } else{
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    list.appendChild(li);
    let cross = document.createElement("img")
    cross.setAttribute("src", "https://img.icons8.com/color/48/cancel--v1.png")
    li.appendChild(cross)
    saveData()
    todo.value = "";
}
})

list.addEventListener("click",
function (e){
  if(e.target.tagName == "IMG"){
    e.target.parentElement.remove()
    saveData()
  }else{
    console.log("please click on cross icon")
  }

});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function yourTodos(){
  list.innerHTML = localStorage.getItem("data")
}
yourTodos()