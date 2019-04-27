const paintBacket = document.getElementById('paint-backet');
const chooseColor = document.getElementById('choose-color'); 
const move =  document.getElementById('move');
const transform = document.getElementById('transform');
const state = {
    correntTool: '',
}
paintBacket.addEventListener("click", function (event) {
    chooseColor.classList.remove('button-active');
    move.classList.remove('button-active');
    transform.classList.remove('button-active');
    if (state.correntTool === 'paintBacket')  {
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

document.addEventListener("click", (event) => {
    console.log("event", event);
})