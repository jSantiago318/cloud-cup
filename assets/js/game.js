import { Main } from "./game/Main";
import Phaser from "phaser";
import { Socket } from "phoenix";
// get email from socket

export class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
    });
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

  init() {
    // check if file save json exists in local storage
    if (localStorage.getItem("save") === null) {
      // if not, create a new file save json
      localStorage.setItem(
        "save",
        JSON.stringify({
          email: "",
          cats: [],
          ui: [],
          interior: [],
          activity: 'Game'
        })
      );
      console.log("save created");
    } else {
      console.log("save exists");

      // if it does, load the save json
      const save = JSON.parse(localStorage.getItem("save"));
      console.log(save);
    }
    

  }

  create() {
    this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3, "Typing Kitties", {
      fill: "#0f0",
      fontSize: "24px",
    });
    // this.add.text(100, 100, email, {fill: "#0f0"});
    const start_btn = this.add
    .image(
      this.game.canvas.width / 2,
      this.game.canvas.height / 2,
      "start_btn"
    )
    .setScale(1.5)

    start_btn.setInteractive();
    start_btn.on("pointerdown", () => {
      // move slightly down when clicked
      start_btn.y += 5;
      // darken the button
      start_btn.tintBottomRight = 0x404040;
    });
    start_btn.on("pointerup", () => {
      // move back up when released
      start_btn.y -= 5;
      // lighten the button
      start_btn.clearTint();
      this.scene.start("Main", { email: this.email });
    });

    const creator_btn = this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 2 + 100, "Creator Mode", {
      fill: "#0f0",
      fontSize: "24px",
    });
    creator_btn.setInteractive();
    creator_btn.on("pointerdown", () => {
      creator_btn.y += 5;
      creator_btn.tintBottomRight = 0x404040;
    });
    creator_btn.on("pointerup", () => {
      creator_btn.y -= 5;
      creator_btn.clearTint();
      this.scene.start("Creator", { email: this.email });
    });
    
    

    
    
  }
}
