import { CHARACTER_ASSET_KEYS, PLAYER_MOVEMENT } from '../keys/asset-keys'
export class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, username) {
    super(scene, x, y, username);     
    this.scene = scene;
    // add player to scene
    this.player = this.scene.add.sprite(x, y, CHARACTER_ASSET_KEYS.CHAR1_WALK)
    this.player.setScale(2)
    this.player.setOrigin(0.5, 1)
    this.player.play(PLAYER_MOVEMENT.LEFT)
    // player name on top 
    this.playerName = this.scene.add.text(this.player.x, this.player.y - 60  , username, {
      fontSize: "18px",
      fill: "#fff",
    });
  }
  update(){
    // move text to player 
    this.playerName.x = this.player.x - 50;
    this.playerName.y = this.player.y - 60;
  }
  moveUp() {
    this.player.y -= 1; 
    this.update()
  }
  moveDown() {
    this.player.y += 1; 
    this.update()
  }
  moveLeft() {
    this.player.x -= 1; 
    this.update()
  }
  moveRight() {
    this.player.x += 1; 
    this.update()
  }
  
}