import Phaser from "phaser";
import {Socket} from "phoenix";
// get email from socket 

export class Game extends Phaser.Scene {
  constructor() {
    super(
      {
        key: "Game"
      }
    );
  }

  preload(){
    this.load.spritesheet("cat01_walk", "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_walk_strip8.png", {
      frameWidth: 320,
      frameHeight: 40
    });

    this.load.spritesheet("cat01_run", "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_run_strip4.png", {
      frameWidth: 160,
      frameHeight: 40
    });

    this.load.spritesheet("cat01_idle", "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_idle_strip8.png", {
      frameWidth: 320,
      frameHeight: 40
    });

    this.load.image("background", "/images/full version/ui/button maker.png");

    this.load.image("ui_all", "/images/full version/ui/UI_all.png");
    this.load.image("interior_all", "/images/interior full 2/global.png");

    this.load.image("mui_1","/images/modernuserinterface-win 2/48x48/Modern_UI_Style_1_48x48.png")

}

  init(data) {
    this.email = data.email;
  }

  create() {
    this.add.text(100, 100, "Hello, "+ this.email, {fill: "#0f0"});
    // this.add.text(100, 100, email, {fill: "#0f0"});

  }
}