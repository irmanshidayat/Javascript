// // DOM Selection
// // document.getElementById() -> element

// // get element
// const judul = document.getElementById('judul');
// // set style color to red
// judul.style.color = 'red';
// // set background color to #ccc
// judul.style.backgroundColor = '#ccc';
// judul.style.fontFamily = 'verdana';
// // set innerHTML
// judul.innerHTML = 'Belajar DOM';

// // document.getElementsByTagName()
// // -> HTMLCollections
// // get Collection of element 
const p = document.getElementsByTagName('p');
// set Element of collection by index of array 
p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'yellow';
p[3].style.backgroundColor = 'green';

// // // with looping
// for( let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// // document.getElementsByClassName() 
// // -> HTMLCollection 
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript'

// // document.querySelector() -> Element 
const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontsize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// //  set the first p
// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';

// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// //  set element
// p[2].style.backgroundColor = 'lightblue';

