import { Main } from "./game/Main";
import Phaser from "phaser";
import { Socket } from "phoenix";

// get email from socket

export class Game extends Phaser.Scene {
  constructor() {
    super("Game");

    this.loaded = false;
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
    this.load.tilemapTiledJSON("island_1", "/images/tiled/interior_map.json");
    this.load.image(
      "mui_1",
      "/images/modernuserinterface-win 2/48x48/Modern_UI_Style_1_48x48.png"
    );
    this.load.image("farm_ref", "/images/full version/global.png");
    this;
  }

  init(data) {
    // check if file save json exists in local storage
    this.username = data.username;
    this.cats = data.cats;

    // join channel with username
  }

  //     this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3, "Typing Kitties", {
  //       fill: "#0f0",
  //       fontSize: "24px",
  //     });
  // // current username
  //     this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3 + 50, this.username, {
  //       fill: "#0f0",
  //       fontSize: "24px",
  //     });
  //     this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3 + 100, this.cats, {
  //       fill: "#0f0",
  //       fontSize: "24px",
  //     });
  create() {
    const map = this.make.tilemap({
      key: "island_1",
      tileWidth: 16,
      tileHeight: 16,
    });
    const tileset = map.addTilesetImage("global", "interior_all");
    const layer = map.createLayer(
      "test",
      tileset,
      0,0
    ).setScale(1.5);

    //  icon for online status
    this.add.text(100, 100, "Typing Kitties", {
      fill: "#0f0",
      fontSize: "24px",
    });
    this.add.text(100, 150, this.username, {
      fill: "#0f0",
      fontSize: "24px",
    });
    this.add.text(100, 200, this.cats, {
      fill: "#0f0",
      fontSize: "24px",
    });
  }
}
