import { CAT_ASSET_KEYS, CHARACTER_ASSET_KEYS, PLAYER_MOVEMENT } from '../keys/asset-keys'
export class Cat extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, username) {
    super(scene, catStyle, y, username);     
    this.scene = scene;
    this.state = CAT_ASSET_KEYS.CAT01_IDLE
    this.cat = this.scene.add.sprite(x, y, CAT_ASSET_KEYS.CAT01_IDLE) 
    this.catName = this.scene.add.text(this.cat.x, this.cat.y - 60  , username, {
      fontSize: "18px",
      fill: "#fff",
    });

    // spawn cat
    this.spawnCat("01", 100, 0.5);
  }

  // ...

  spawnCat(cat_type, y, speed) {
    const cat = this.scene.add.sprite(-10, y, cat_type).setScale(2.5).setDepth(-10);
    if (speed > 0.5) {
      cat.anims.play("cat" + cat_type + "_run");
    } else {
      cat.anims.play("cat" + cat_type + "_walk");
    }
    const ran_delay = [100,200,400]
    this.scene.tweens.add({
      targets: cat,
      x: this.scene.game.canvas.width + 50,
      delay:  ran_delay[Math.floor(Math.random() * ran_delay.length)],
      duration: 25000 - (25000 * speed),
      repeat: 0,
      onComplete: () => {
        this.destroy_count += 1;
        cat.destroy();
      },
    });

    cat.setInteractive();
  }
}