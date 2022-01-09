const variables = document.querySelectorAll('label');
let inputStyle = document.querySelectorAll('input');

// inputStyle[0].addEventListener('click', () => inputStyle[0].classList.add('update'));
// inputStyle[1].addEventListener('click', () => inputStyle[1].classList.add('update'));

variables.forEach(label => {
    let splitWord = label.innerText.split('');
    let mapWord = splitWord.map((element, index) => {
        let indexCal = index * 50;
        return `<span class ="hover" style="transition-delay: ${indexCal}ms">${element}</span>`;
    })
    label.innerHTML = mapWord.join('');
})

