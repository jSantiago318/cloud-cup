import Phaser from "phaser";
import { SCENE_KEYS } from "../keys/scene-keys";
import { Socket } from "phoenix";
// get email from socket

export class Stats extends Phaser.Scene {
  constructor() {
    super({key: "Stats"});
  }
 

  init(data) {
    this.email = data.email;
  }

  create() {
    this.add.text(this.game.canvas.width / 2 - 100, this.game.canvas.height / 3, "Stats", {
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
      this.scene.start("Game");
    });
    
    
  }
}
