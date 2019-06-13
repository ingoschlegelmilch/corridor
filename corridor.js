const theBody = document.querySelector('body');
const ceiling = document.querySelector('.top');
const center = document.querySelector('.center');
const special = document.querySelector('#special');
const bottom = document.querySelector('.bottom');

let x = 0;

document.addEventListener('mousewheel', event => {
    console.log(event, "hallo");
    /*
    let compBody = window.getComputedStyle(theBody);
    let compTop = window.getComputedStyle(ceiling);
    let compCenter = window.getComputedStyle(center);
    let compBottom = window. getComputedStyle(bottom);
    */
    
    if (event.deltaY < 0) {
        console.log('rauf', theBody.style);
        x += 0.1;
        theBody.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]; grid-template-rows: [ceiling-start] auto [ceiling-end] ${x}% [floor-start] auto [floor-end];`;
        ceiling.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]`;
        center.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]`;
        bottom.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]`;
    } else if (event.deltaY > 0) {
        console.log('runter');
        x -= 0.1;
        theBody.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]; grid-template-rows: [ceiling-start] auto [ceiling-end] ${x}% [floor-start] auto [floor-end];`;
        ceiling.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]`;
        center.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]`;
        bottom.style = `grid-template-columns: [left-wall-start] auto [center-start] ${x}% [right-wall-start] auto [right-wall-end]`;
    } else return;
});