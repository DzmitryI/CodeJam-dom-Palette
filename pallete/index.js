const paintBacket = document.getElementById('paint-backet');
const chooseColor = document.getElementById('choose-color');
const move = document.getElementById('move');
const transform = document.getElementById('transform');
const state = {
    correntTool: '',
}
let count = 0;

document.onkeypress = function (event) {
    switch (event.key) {
        case "p":
            chooseColor.classList.remove('button-active');
            move.classList.remove('button-active');
            transform.classList.remove('button-active');
            if (state.correntTool === 'paintBacket') {
                paintBacket.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = "default";
            }
            else {
                state.correntTool = 'paintBacket';
                paintBacket.classList.add('button-active');
                document.body.style.cursor = "url('./assets/icons/paint_backet.png'), auto";
            }
            break;
        case "c":
            paintBacket.classList.remove('button-active');
            move.classList.remove('button-active');
            transform.classList.remove('button-active');
            if (state.correntTool === 'chooseColor') {
                chooseColor.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = "default";
            }
            else {
                state.correntTool = 'chooseColor';
                chooseColor.classList.add('button-active');
                document.body.style.cursor = "default";
            }
            break;
        case "m":
            paintBacket.classList.remove('button-active');
            chooseColor.classList.remove('button-active');
            transform.classList.remove('button-active');
            if (state.correntTool === 'move') {
                move.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = "default";
            }
            else {
                state.correntTool = 'move';
                move.classList.add('button-active');
                document.body.style.cursor = "url('./assets/icons/move.png'), auto";
            }
            break;
        case "t":
            paintBacket.classList.remove('button-active');
            chooseColor.classList.remove('button-active');
            move.classList.remove('button-active');
            if (state.correntTool === 'transform') {
                transform.classList.remove('button-active');
                state.correntTool = '';
                document.body.style.cursor = "default";
            }
            else {
                state.correntTool = 'transform';
                transform.classList.add('button-active');
                document.body.style.cursor = "url('./assets/icons/transform.png'), auto";
            }
            break;
        default:
            break;
    }

}

paintBacket.addEventListener("click", function (event) {
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'paintBacket') {
        paintBacket.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = "default";
    }
    else {
        state.correntTool = 'paintBacket';
        paintBacket.classList.add('button-active');
        document.body.style.cursor = "url('./assets/icons/paint_backet.png'), auto";
    }
});
chooseColor.addEventListener("click", function (event) {
    paintBacket.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'chooseColor') {
        chooseColor.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = "default";
    }
    else {
        state.correntTool = 'chooseColor';
        chooseColor.classList.add('button-active');
        document.body.style.cursor = "default";
    }
});
move.addEventListener("click", function (event) {
    paintBacket.classList.remove('button-active');
    chooseColor.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'move') {
        move.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = "default";
    }
    else {
        state.correntTool = 'move';
        move.classList.add('button-active');
        document.body.style.cursor = "url('./assets/icons/move.png'), auto";
    }
});
transform.addEventListener("click", function (event) {
    paintBacket.classList.remove('button-active');
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    if (state.correntTool === 'transform') {
        transform.classList.remove('button-active');
        state.correntTool = '';
        document.body.style.cursor = "default";
    }
    else {
        state.correntTool = 'transform';
        transform.classList.add('button-active');
        document.body.style.cursor = "url('./assets/icons/transform.png'), auto";
    }
});

const currentColor = document.getElementById('current');
const prevColor = document.getElementById('prev');

document.addEventListener("click", (event) => {
    if (state.correntTool === 'chooseColor' && event.target.parentNode.id !== "choose-color" && event.target.id !== "choose-color") {
        const newColor = window.getComputedStyle(event.target).backgroundColor;
        prevColor.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        currentColor.style.backgroundColor = newColor;
    }
    let elem = event.target.closest('.draggable');
    if (!elem) return; // не нашли, клик вне draggable-объекта
    if (state.correntTool === 'paintBacket') {
        elem.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
    }
    if (state.correntTool === 'transform') {
        elem.style.backgroundColor = window.getComputedStyle(currentColor).backgroundColor;
        if (event.target.className !== 'draggable circle') {
            elem.classList.add('circle');
        }
        else {
            elem.classList.remove('circle');
        }
    }
})

const dragObject = {};
document.onmousedown = function (event) {

    if (state.correntTool === 'move') {
        // const width = window.getComputedStyle(canvasItem1).width;
        // const height = window.getComputedStyle(canvasItem1).height;
        // console.log('width', width);
        // console.log('height', height);
        // canvasItem1.style.width = width;
        // canvasItem1.style.height = height;
        // canvasItem1.dr
        // ball.onmousedown = function(e) { // 1. отследить нажатие
        //
        var elem = event.target.closest('.draggable');

        if (!elem) return; // не нашли, клик вне draggable-объекта

        // // запомнить переносимый объект
        // dragObject.elem = elem;

        // // запомнить координаты, с которых начат перенос объекта
        // dragObject.downX = event.pageX;
        // dragObject.downY = event.pageY;
        // //
        // elem.dragObject
        var dragSrcEl = null;
        function handleDragStart(e) {
            this.style.opacity = '0.4';  // this / e.target is the source node.
            dragSrcEl = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        }

        function handleDragOver(e) {
            // if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
            // }
            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
            return false;
        }

        function handleDragEnter(e) {
            this.classList.add('over');
        }

        function handleDragLeave(e) {
            this.classList.remove('over');  // this / e.target is previous target element.
        }

        function handle1Drop(e) {
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }
            if (dragSrcEl != this) {
                dragSrcEl.innerHTML = this.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text/html');
            }
            console.log(count++);
            return false;
        }

        function handleDragEnd(e) {

            [].forEach.call(cols, function (col) {
                col.classList.remove('over');
            });
        }

        var cols = document.querySelectorAll('.draggable');
        [].forEach.call(cols, function (col) {
            col.addEventListener('dragstart', handleDragStart, false);
            col.addEventListener('dragenter', handleDragEnter, false)
            col.addEventListener('dragover', handleDragOver, false);
            col.addEventListener('dragleave', handleDragLeave, false);
            col.addEventListener('drop', handle1Drop, false);
            col.addEventListener('dragend', handleDragEnd, false);
        });




        // // подготовить к перемещению
        // // 2. разместить на том же месте, но в абсолютных координатах
        // canvasItem1.style.position = 'absolute';
        // moveAt(event);
        // // переместим в body, чтобы мяч был точно не внутри position:relative
        // document.body.appendChild(canvasItem1);

        // canvasItem1.style.zIndex = 1000; // показывать мяч над другими элементами

        // // передвинуть мяч под координаты курсора
        // // и сдвинуть на половину ширины/высоты для центрирования
        // function moveAt(event) {
        //     canvasItem1.style.left = event.pageX - canvasItem1.offsetWidth / 2 + 'px';
        //     canvasItem1.style.top = event.pageY - canvasItem1.offsetHeight / 2 + 'px';
        // }

        // // 3, перемещать по экрану
        // document.onmousemove = function (e) {
        //     moveAt(event);
        // }
        // canvasItem1.ondragstart = function () {
        //     return false;
        // };
        // // 4. отследить окончание переноса
        // canvasItem1.onmouseup = function () {
        //     document.onmousemove = null;
        //     canvasItem1.onmouseup = null;
        // }

    }

}

