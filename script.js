const box = document.querySelector('.box');
const output = document.querySelector('#output')
let input;
addEventListener('input', (e) => inputEvent(e));

const inputEvent = (e) => {
    input = { id: e.target.id, value: e.target.value }
    const styles = window.getComputedStyle(box);

    switch (input.id) {
        case 'top-left':
            box.style.setProperty('border-top-left-radius', e.target.value + '%');
            break;
        case 'top-right':
            box.style.setProperty('border-top-right-radius', e.target.value + '%');
            break;
        case 'bottom-left':
            box.style.setProperty('border-bottom-left-radius', e.target.value + '%');
            break;
        case 'bottom-right':
            box.style.setProperty('border-bottom-right-radius', e.target.value + '%');
            break;
        default:
            break;
    }

    output.value = styles.borderTopLeftRadius + ' ' + styles.borderTopRightRadius + ' ' + styles.borderBottomRightRadius + ' ' + styles.borderBottomLeftRadius;
}

const formReset = () => box.style.setProperty('border-radius', '0%');

const copy = () => {
    output.select(); // Select the text field
    output.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(output.value);

    alert("Copied to clipboard " + output.value);
}
const showController = (e) => {
    hideControllers();
    const text = e.target.innerText;
    document.querySelector('h3').innerText = text;
    const inputClass = '.' + text.toLowerCase().replace(' ', '-');
    const inputList = document.querySelectorAll(`${inputClass}`);
    console.log(inputList);
    inputList[0].style.setProperty('display', 'inline');
    inputList[1].style.setProperty('display', 'inline-block');
}
const hideControllers = () => {
    let boxControllers = document.querySelectorAll('.box-controller');
    for (let i = 0; i < boxControllers.length; i++) {
        boxControllers[i].style.setProperty('display', 'none');
    }
}

