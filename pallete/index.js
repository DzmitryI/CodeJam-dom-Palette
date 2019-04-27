const paintBacket = document.getElementById('paint-backet');
const chooseColor = document.getElementById('choose-color');
const move = document.getElementById('move');
const transform = document.getElementById('transform');
const state = {
    correntTool: '',
}
paintBacket.addEventListener("click", function (event) {
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'paintBacket') {
        paintBacket.classList.remove('button-active');
        state.correntTool = '';
    }
    else {
        state.correntTool = 'paintBacket';
        paintBacket.classList.add('button-active');
    }
});
chooseColor.addEventListener("click", function (event) {
    paintBacket.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'chooseColor') {
        chooseColor.classList.remove('button-active');
        state.correntTool = '';
    }
    else {
        state.correntTool = 'chooseColor';
        chooseColor.classList.add('button-active');
    }
});
move.addEventListener("click", function (event) {
    paintBacket.classList.remove('button-active');
    chooseColor.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'move') {
        move.classList.remove('button-active');
        state.correntTool = '';
    }
    else {
        state.correntTool = 'move';
        move.classList.add('button-active');
    }
});
transform.addEventListener("click", function (event) {
    paintBacket.classList.remove('button-active');
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    if (state.correntTool === 'transform') {
        transform.classList.remove('button-active');
        state.correntTool = '';
    }
    else {
        state.correntTool = 'transform';
        transform.classList.add('button-active');
    }
});

const canvasItem1 = document.getElementById('canvas-item-1');
const canvasItem2 = document.getElementById('canvas-item-2');
const canvasItem3 = document.getElementById('canvas-item-3');
const canvasItem4 = document.getElementById('canvas-item-4');
const canvasItem5 = document.getElementById('canvas-item-5');
const canvasItem6 = document.getElementById('canvas-item-6');
const canvasItem7 = document.getElementById('canvas-item-7');
const canvasItem8 = document.getElementById('canvas-item-8');
const canvasItem9 = document.getElementById('canvas-item-9');
const currentColor = document.getElementById('current');
const prevColor = document.getElementById('prev');

canvasItem1.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem1.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem1.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem1.classList.add('circle');
        }
        else {
            canvasItem1.classList.remove('circle');
        }
    }
})
canvasItem2.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem2.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem2.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem2.classList.add('circle');
        }
        else {
            canvasItem2.classList.remove('circle');
        }
    }
})
canvasItem3.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem3.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem3.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem3.classList.add('circle');
        }
        else {
            canvasItem3.classList.remove('circle');
        }
    }
})
canvasItem4.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem4.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem4.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem4.classList.add('circle');
        }
        else {
            canvasItem4.classList.remove('circle');
        }
    }
})
canvasItem5.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem5.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem5.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem5.classList.add('circle');
        }
        else {
            canvasItem5.classList.remove('circle');
        }
    }
})
canvasItem6.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem6.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem6.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem6.classList.add('circle');
        }
        else {
            canvasItem6.classList.remove('circle');
        }
    }
})
canvasItem7.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem7.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem7.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem7.classList.add('circle');
        }
        else {
            canvasItem7.classList.remove('circle');
        }
    }
})
canvasItem8.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem8.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem8.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem8.classList.add('circle');
        }
        else {
            canvasItem8.classList.remove('circle');
        }
    }
})
canvasItem9.addEventListener("click", (event) => {
    if (state.correntTool === 'paintBacket') {
        canvasItem9.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        canvasItem9.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'circle') {
            canvasItem9.classList.add('circle');
        }
        else {
            canvasItem9.classList.remove('circle');
        }
    }
})

document.addEventListener("click", (event) => {
    if (state.correntTool === 'chooseColor' && event.target.parentNode.id !== "choose-color" && event.target.id !== "choose-color") {
        const newColor = window.getComputedStyle(event.target).backgroundColor;
        prevColor.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        currentColor.style.backgroundColor = newColor;
    }
})