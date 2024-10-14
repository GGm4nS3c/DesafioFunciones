/* 
function pintar(elementId,color) {
    const element = document.querySelector("#"+elementId)
    element.style.backgroundColor = color;
}
*/

const pintar = (elementId,color = 'green') => {
    const element = document.querySelector("#"+elementId)
    element.style.backgroundColor = color;
}


