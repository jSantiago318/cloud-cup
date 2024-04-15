import Phaser from "phaser";

export class Demo extends Phaser.Scene {
  constructor() {
    super({
      key: "Demo",
    });
  }

  preload() {
    this.load.spritesheet(
      "cat01_walk",
      "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_walk_strip8.png",
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    this.load.spritesheet(
      "cat01_run",
      "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_run_strip4.png",
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );

    this.load.spritesheet(
      "cat01_idle",
      "/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_idle_strip8.png",
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
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
          activity: 'Demo'
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

    // animation cat01
    this.cat01 = this.add.sprite(100,200, "cat01_walk").setScale(3);
    this.anims.create({
      key: "cat01_walk",
      frames: this.anims.generateFrameNumbers("cat01_walk", { start: 0, end: 8 }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });

    // tween that takes a random duration from 2-6 seconds
    this.tweens.add({
      targets: this.cat01,
      x: 500,
      duration: 2000 + Math.random() * 4000,
      repeat: -1,
      destroyOnComplete: true,
    });

    this.cat01.anims.play("cat01_walk");

    // animation cat01_run
    
    
  





    this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3, "Typing Kitties Demo", {
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
