import Phaser from "phaser";
import { Socket } from "phoenix";
// get email from socket



export class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }
  
  
  preload() {
    this.load.spritesheet(
      "cat01_walk",
      "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_walk_strip8.png",
      {
        frameWidth: 320,
        frameHeight: 40,
      }
    );

    this.load.spritesheet(
      "cat01_run",
      "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_run_strip4.png",
      {
        frameWidth: 160,
        frameHeight: 40,
      }
    );

    this.load.spritesheet(
      "cat01_idle",
      "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_idle_strip8.png",
      {
        frameWidth: 320,
        frameHeight: 40,
      }
    );

    this.load.image("ui_sd", "/images/full version/ui/button maker.png");
    this.load.image("start_btn", "/images/full version/ui/start_btn.png");
    this.load.image("ui_all", "/images/full version/ui/UI_all.png");
    this.load.image("interior_all", "/images/interior full 2/global.png");

    this.load.image(
      "mui_1",
      "/images/modernuserinterface-win 2/48x48/Modern_UI_Style_1_48x48.png"
    );
  }
  
   
 

  create() {
    this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3, "Game Over", {
      fill: "#0f0",
    });
    // 
  }
}
