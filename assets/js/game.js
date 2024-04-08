import Phaser from "phaser";
import { preload } from "./game/preload";

function getScreenW() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  return width * 0.95;
}

function getScreenH() {
  var height = window.innerHeight > 0 ? window.innerHeight : screen.height;
  return height * 0.7;
}

class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
    this.cursors = null;
    this.selectedButtonIndex = 3;
    this.preload = preload;
  }

  // ... rest of the Menu class methods ...

}

class Demo extends Phaser.Scene {
  constructor() {
    super({ key: "demo" });
    this.imageID = null;
    this.tab = null;
  }

  // ... rest of the Demo class methods ...

}
  

// export all
export { Menu, Demo };