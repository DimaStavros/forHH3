let rentObjects = document.querySelector('.rentObjects');


let template = document.querySelector('#newRentObj').content;

let element = template.querySelector('div');


addButton.onclick = function() {
  let clonedElement = element.cloneNode(true);

  rentObjects.appendChild(clonedElement);
  };
