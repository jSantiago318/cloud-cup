class Tile extends Phaser.GameObjects.Rectangle {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}