class ClickManager {
    constructor(pipes) {
        this.canvas = document.getElementById('game-canvas');

        this.pipes = pipes;

        this.canvas.addEventListener('click', this.handleClick.bind(this), false);
    }

    handleClick(e) {
        let col = Math.floor((e.pageX - this.canvas.offsetLeft) / 50);
        let row = Math.floor((e.pageY - this.canvas.offsetTop) / 50);

        this.pipes.cells[col][row].rotate();
    }
}

module.exports = ClickManager;
