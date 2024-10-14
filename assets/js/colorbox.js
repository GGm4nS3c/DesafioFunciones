document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    paint("pink");
  } else if (event.key === "s") {
    paint("orange");
  } else if (event.key === "d") {
    paint("deepskyblue");
  } else if (event.key === "q") {
    creatediv('purple');
  }else if (event.key === "w") {
    creatediv('gray');
  }else if (event.key === "e") {
    creatediv('brown');
  }
  
});

function paint(color) {
  const box1Properties = document.querySelector("#key");
  box1Properties.style.backgroundColor = color;
}

function creatediv(color){
    const container = document.getElementById("container");
    const newdiv = document.createElement("div");
    newdiv.style.width = '200px'
    newdiv.style.height = '200px'
    newdiv.style.backgroundColor = color
    newdiv.style.border = '2px solid black'
    container.appendChild(newdiv)
}