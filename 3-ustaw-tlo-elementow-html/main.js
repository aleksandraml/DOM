const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    // console.log(p2);

p1.style.backgroundColor ='red';
p2.style.backgroundColor ='yellow';
}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);

