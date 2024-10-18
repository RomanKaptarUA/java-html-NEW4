// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const des = document.querySelector('#des');

// parent.addEventListener('click', () => {
//     console.log('parent click');
// });

// child.addEventListener('click', () => {
//     console.log('child click');
// });

// des.addEventListener('click', () => {
//     console.log('child click');
// });








// const parent = document.querySelector('#parent');

// parent.addEventListener('click', (event) => {
//     console.log('event.targen: ', event.target)
//     console.log('event.currentTarget: ', event.currentTarget)
// })






// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const des = document.querySelector('#des');

// parent.addEventListener('click', () => {
//     alert('parent click');
// });

// child.addEventListener('click', () => {
//     alert('Child click');
// });

// des.addEventListener('click', () => {
//     event.stopPropagation();
//     alert('des click');
// });










const box = document.querySelector('div.box');
box.addEventListener('click', function (event) {
    console.log(event.target);
})





