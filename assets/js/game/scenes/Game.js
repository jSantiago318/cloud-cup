import { CHARACTER_ASSET_KEYS, FARM_ASSET_KEYS } from "../keys/asset-keys";

import Phaser from "phaser";
import {Player} from "../entities/Player.js";
import { SCENE_KEYS } from "../keys/scene-keys";

// get email from socket

export class Game extends Phaser.Scene {
  constructor() {
    super({key: SCENE_KEYS.GAME_SCENE});
    this.player = null;
  }
  
  create(data) {
    this.player = new Player(this, 100, 100, data.username);
    this.player.setInteractive();
    // when W key is pressed
  

    
    this.add.text(100, 100, "Typing Kitties", {
      fill: "#0f0",
      fontSize: "24px",
    }); 
    
    this.grass_tile = this.add.image(0, 0, FARM_ASSET_KEYS.FLOOR_GRASS)
    this.grass_tile.setCrop(0, 0, 48, 48).setOrigin(0, 0)
    
    // create a new menu
    

  const menuMatrix = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
  ]
  // create a new menu
  this.menu = this.add.container(100, 300);
  // create a new menu item
  }
  update() {
    
    const cursorKeys = this.input.keyboard.createCursorKeys();
    if (cursorKeys.up.isDown) {
      this.player.moveUp();
    } 
     if (cursorKeys.down.isDown) {
      this.player.moveDown();
    } 

     if (cursorKeys.left.isDown) {
      this.player.moveLeft();
    }
     
     if (cursorKeys.right.isDown) {
      this.player.moveRight();
    }
  }

}
