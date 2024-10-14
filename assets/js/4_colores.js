box1.addEventListener ("click", () => paintBox('box1'))
box2.addEventListener ("click", () => paintBox('box2'))
box3.addEventListener ("click", () => paintBox('box3'))
box4.addEventListener ("click", () => paintBox('box4'))

function paintBox(box) {
    const boxProperties = document.querySelector("#" + box)
    boxProperties.style.backgroundColor = 'black'
}