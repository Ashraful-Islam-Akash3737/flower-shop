function getInputId(inputId){
    const inputText = document.getElementById(inputId).innerText;
    const input = parseFloat(inputText);
    return input;
}

function setElement(elementId, total) {
    const element = document.getElementById(elementId);
    element.innerText = total;
}

function showElement(elementId, name){
    const flowerName = document.getElementById(elementId);
    const p = document.createElement('p');
    let count = flowerName.childElementCount;
    p.classList = "item";
    p.innerText =`${count }. ${name}` ;
    flowerName.appendChild(p);
}