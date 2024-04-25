import Phaser from "phaser";
import { SCENE_KEYS } from "../keys/scene-keys";
import { Socket } from "phoenix";
// get email from socket

export class Options extends Phaser.Scene {
  constructor() {
    super({key: "Options"});
  }
  
  
  init(data) {
    this.email = data.email;
  }
  
  
  create() {
    const menuOptions  = [
      'back',
      'keybings',
      'sound',
      'gameplay',
      'graphics',
      'display',
      'text',
      'language',
      'online?'
    ]
    // active option
    this.active = 0
    const title = this.add.text(this.game.canvas.width / 2, 100, "Options", {
      fill: "#0f0",
      fontSize: "48px",
    }).setOrigin(0.5);

    // show highlighted option
    // show options
this.back = this.add.text(this.game.canvas.width / 2, 150, menuOptions[0], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5).setInteractive();
    this.keybings = this.add.text(this.game.canvas.width / 2, 200, menuOptions[1], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.soundBtn = this.add.text(this.game.canvas.width / 2, 200 + 50, menuOptions[2], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.gameplayBtn = this.add.text(this.game.canvas.width / 2, 200 + 100, menuOptions[3], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.graphicsBtn = this.add.text(this.game.canvas.width / 2, 200 + 150, menuOptions[4], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.displayBtn = this.add.text(this.game.canvas.width / 2, 200 + 200, menuOptions[5], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.textBtn = this.add.text(this.game.canvas.width / 2, 200 + 250, menuOptions[6], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.languageBtn = this.add.text(this.game.canvas.width / 2, 200 + 300, menuOptions[7], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5);
    this.onlineBtn = this.add.text(this.game.canvas.width / 2, 200 + 350, menuOptions[8], {
      fill: "#0f0",
      fontSize: "24px",
    }).setOrigin(0.5)

    // if active option is active change color and move 

 
    this.pointer = this.add.image(this.back.x - 10, this.back.y, "pointer").setScale(0.75).setDepth(50).setVisible(false).setOrigin(0.5)

    this.pointer.setX(this.back.x - 50);
    this.pointer.setY(this.back.y);
    this.pointer.setVisible(true);
    this.pointer.setInteractive();
    // tween pointer slightly left and right
    this.tweens.add({
      targets: this.pointer,
      x: this.pointer.x + 5,
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });
     
  
  }

  update(){
    this.options = [
      this.back,
      this.keybings,
      this.soundBtn,
      this.gameplayBtn,
      this.graphicsBtn,
      this.displayBtn,
      this.textBtn,
      this.languageBtn,
      this.onlineBtn
    ]
    const cursors = this.input.keyboard.createCursorKeys();

    if(Phaser.Input.Keyboard.JustUp(cursors.up)){
      this.active -= 1;
      if(this.active < 0){
        this.active = this.options.length - 1;
      }
      // move pointer
      this.pointer.setY(this.options[this.active].y);
      this.pointer.setX(this.options[this.active].x - 50);

    } else if(Phaser.Input.Keyboard.JustUp(cursors.down)){
      this.active += 1;
      if(this.active > this.options.length - 1){
        this.active = 0;
      }
      // move pointer
      this.pointer.setY(this.options[this.active].y);
      this.pointer.setX(this.options[this.active].x - 50);
    } else if (Phaser.Input.Keyboard.JustUp(cursors.space)){
      // select option
      if(this.active === 0){
        // go back to main
        this.scene.start(SCENE_KEYS.MAIN_SCENE, {email: this.email});
      }
    }

  }
}
