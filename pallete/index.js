const paintBacket = document.getElementById('paint-backet');
const chooseColor = document.getElementById('choose-color');
const move = document.getElementById('move');
const transform = document.getElementById('transform');
const canvas = document.getElementById('canvas');
const currentColor = document.getElementById('current');
const prevColor = document.getElementById('prev');
const state = {
    correntTool: ''
};

if (localStorage.getItem('state') !== null) {
    const localState = localStorage.getItem('state');
    state.correntTool = localState;
    switch (localState) {
        case 'paintBacket':
            paintBacket.classList.add('button-active');
            document.body.style.cursor = "url('./assets/icons/paint_backet.png'), auto";
            break;
        case 'chooseColor':
            chooseColor.classList.add('button-active');
            document.body.style.cursor = 'default';
            break;
        case 'move':
            move.classList.add('button-active');
            document.body.style.cursor = "url('./assets/icons/move.png'), auto";
            break;
        case 'transform':
            transform.classList.add('button-active');
            document.body.style.cursor = "url('./assets/icons/transform.png'), auto";
            break;
        default:
            break;
    }
}

if (localStorage.getItem('prevColor') !== null) {
    const LocalPrevColor = localStorage.getItem('prevColor');
    prevColor.style.backgroundColor = LocalPrevColor;
}

if (localStorage.getItem('currentColor') !== null) {
    const LocalCurrentColor = localStorage.getItem('currentColor');
    currentColor.style.backgroundColor = LocalCurrentColor;
}

if (localStorage.getItem('canvas') !== null) {
    const LocalCanvas = localStorage.getItem('canvas');
    canvas.innerHTML = LocalCanvas;
}

document.onkeypress = function(event) {
    switch (event.key) {
        case 'p':
            chooseColor.classList.remove('button-active');
            move.classList.remove('button-active');
            transform.classList.remove('button-active');
            if (state.correntTool === 'paintBacket') {
                paintBacket.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = 'default';
            } else {
                state.correntTool = 'paintBacket';
                paintBacket.classList.add('button-active');
                document.body.style.cursor = "url('./assets/icons/paint_backet.png'), auto";
            }
            localStorage.setItem('state', state.correntTool);
            break;
        case 'c':
            paintBacket.classList.remove('button-active');
            move.classList.remove('button-active');
            transform.classList.remove('button-active');
            if (state.correntTool === 'chooseColor') {
                chooseColor.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = 'default';
            } else {
                state.correntTool = 'chooseColor';
                chooseColor.classList.add('button-active');
                document.body.style.cursor = 'default';
            }
            localStorage.setItem('state', state.correntTool);
            break;
        case 'm':
            paintBacket.classList.remove('button-active');
            chooseColor.classList.remove('button-active');
            transform.classList.remove('button-active');
            if (state.correntTool === 'move') {
                move.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = 'default';
            } else {
                state.correntTool = 'move';
                move.classList.add('button-active');
                document.body.style.cursor = "url('./assets/icons/move.png'), auto";
            }
            localStorage.setItem('state', state.correntTool);
            break;
        case 't':
            paintBacket.classList.remove('button-active');
            chooseColor.classList.remove('button-active');
            move.classList.remove('button-active');
            if (state.correntTool === 'transform') {
                transform.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = 'default';
            } else {
                state.correntTool = 'transform';
                transform.classList.add('button-active');
                document.body.style.cursor = "url('./assets/icons/transform.png'), auto";
            }
            localStorage.setItem('state', state.correntTool);
            break;
        default:
            break;
    }
};

paintBacket.addEventListener('click', function() {
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'paintBacket') {
        paintBacket.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = 'default';
    } else {
        state.correntTool = 'paintBacket';
        paintBacket.classList.add('button-active');
        document.body.style.cursor = "url('./assets/icons/paint_backet.png'), auto";
    }
    localStorage.setItem('state', state.correntTool);
});

chooseColor.addEventListener('click', function() {
    paintBacket.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'chooseColor') {
        chooseColor.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = 'default';
    } else {
        state.correntTool = 'chooseColor';
        chooseColor.classList.add('button-active');
        document.body.style.cursor = 'default';
    }
    localStorage.setItem('state', state.correntTool);
});

move.addEventListener('click', function() {
    paintBacket.classList.remove('button-active');
    chooseColor.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'move') {
        move.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = 'default';
    } else {
        state.correntTool = 'move';
        move.classList.add('button-active');
        document.body.style.cursor = "url('./assets/icons/move.png'), auto";
    }
    localStorage.setItem('state', state.correntTool);
});

transform.addEventListener('click', function() {
    paintBacket.classList.remove('button-active');
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    if (state.correntTool === 'transform') {
        transform.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = 'default';
    } else {
        state.correntTool = 'transform';
        transform.classList.add('button-active');
        document.body.style.cursor = "url('./assets/icons/transform.png'), auto";
    }
    localStorage.setItem('state', state.correntTool);
});

document.addEventListener('click', event => {
    if (
        state.correntTool === 'chooseColor' &&
        event.target.parentNode.id !== 'choose-color' &&
        event.target.id !== 'choose-color'
    ) {
        const newColor = window.getComputedStyle(event.target).backgroundColor;
        prevColor.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        currentColor.style.backgroundColor = newColor;
        localStorage.setItem('prevColor', prevColor.style.backgroundColor);
        localStorage.setItem('currentColor', currentColor.style.backgroundColor);
    }
    const elem = event.target.closest('.draggable');
    if (!elem) return;
    if (state.correntTool === 'paintBacket') {
        elem.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        elem.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'draggable circle') {
            elem.classList.add('circle');
        } else {
            elem.classList.remove('circle');
        }
    }
    localStorage.setItem('canvas', canvas.innerHTML);
});

let dragSrcEl = null;
function handleDragStart() {
    if (state.correntTool === 'move') dragSrcEl = this;
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDragEnter() {
    if (state.correntTool === 'move') this.classList.add('over');
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(event) {
    if (state.correntTool === 'move') {
        event.stopPropagation();
        if (dragSrcEl !== this) {
            let curring = this.nextElementSibling;
            if (curring === dragSrcEl) curring = this;
            const ren = canvas.replaceChild(this, dragSrcEl);
            canvas.insertBefore(ren, curring);
        }
        this.classList.remove('over');
        localStorage.setItem('canvas', canvas.innerHTML);
    }
}

const cols = document.querySelectorAll('.draggable');
function handleDragEnd() {
    [].forEach.call(cols, function(col) {
        col.classList.remove('over');
    });
}

[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart);
    col.addEventListener('dragenter', handleDragEnter);
    col.addEventListener('dragover', handleDragOver);
    col.addEventListener('dragleave', handleDragLeave);
    col.addEventListener('drop', handleDrop);
    col.addEventListener('dragend', handleDragEnd);
});
