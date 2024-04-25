import { Game } from "phaser";
import Phaser from "phaser";
import { SCENE_KEYS } from "../keys/scene-keys";
import { UI_ASSET_KEYS } from "../keys/asset-keys";
export class Main extends Phaser.Scene {
  
  constructor() {
    const randomUsername = () => {
      const adjectives = [
        "Adventurous",
        "Brave",
        "Calm" ]
      const nouns = [
        "Cat",
        "Dog",
        "Bird"]
      const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
      const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
      return `${randomAdj} ${randomNoun}`;
    }
    super({key: SCENE_KEYS.MAIN_SCENE});
    // username
    this.username = randomUsername();
    this.userId = 0;
    // modal state
    this.modal = false;
    // cat01
    this.user_cat01 = [101];
    this.cursors = null;
    this.start_btn = null;
    this.opt_btn = null;
    
    this.total_entities = 0;
    this.destroy_count = 0;
  
  }
  




  init() {
    // check if file save json exists in local storage
    if (localStorage.getItem("tkit_us") === null) {
      // if not, create a new file save json
      localStorage.setItem(
        "tkit_us", 
        // this.username
        JSON.stringify({
          username: this.username,
          cat: this.user_cat01,
          score: 0,
          level: 0,
          time: 0,
        })
      );
      // save this current scene state
        
      console.log("save created");
    } else {
      console.log("save exists");

      // if it does, load the save json
      const save = JSON.parse(localStorage.getItem("tkit_us"));
      console.log(save);
    }

    const total_entites =  this.add.text(10, 10 , this.total_entities, {
      fill: "#ffff",
      fontFamily: "Nunito",
      fontSize: "18px",
    }).setDepth(10);

    const current_enties  = this.add.text(10, 50, this.total_entities, {
      fill: "#ffff",
      fontFamily: "Nunito",
      fontSize: "18px",
    }).setDepth(10);

    const catSpawnRate = [1, 2, 3, 4]
    const catSpeeds = [0.1, 0.3, 0.4, 0.5, 0.6, 0.8]
    const cats = ["01", "02", "03", "04", "05"]
    function getRandomCat() {
      return catSpawnRate[Math.floor(Math.random() * catSpawnRate.length)];
    }

  

    function getCat(){
      return cats[Math.floor(Math.random() * cats.length)];
    }
    function getSpeed(){
      return catSpeeds[Math.floor(Math.random() * catSpeeds.length)];
    }

    const randomY = () => {
      const maxH = this.game.canvas.height - 50
      const minH = 50
      return Math.floor(Math.random() * (maxH - minH + 1) + minH);
    }


    this.time.addEvent({
      delay:  1000,
      callback: () => {
        for (let i = 0; i < getRandomCat() ; i++) {
      // random speed range [30% -> 85%]
    this.spawnCat(getCat(), randomY(), getSpeed());
    this.total_entities += 1;
          total_entites.setText(this.total_entities);
        }
      },
      loop: true,
    })


  

     
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.title_bg = this.add.image(
      this.game.canvas.width / 2 - 50,
      this.game.canvas.height / 2 - 50,
      UI_ASSET_KEYS.BTN_DEF
    ).setScale(2.5).setDepth(10);
    // title typing kitties on top of title
    this.title = this.add.text(
      this.title_bg.x - 60,
      this.title_bg.y - 10,
      "Typing Kitties",
      {
        fill: "#000",
        fontFamily: "Nunito",
        fontSize: "21px",
      }
    ).setDepth(10);
    
   
   this.start_btn = this.add.image(
      this.game.canvas.width / 2 - 50,
      this.game.canvas.height / 2 + 50,
      UI_ASSET_KEYS.BTN_DEF
    ).setScale(1.5).setDepth(10);
    this.start_btn.setInteractive();
    this.start_btn.on("pointerdown", () => {
      this.start_btn.setTexture(UI_ASSET_KEYS.BTN_DEF_PRESS);
      this.start_btn.tintBottomRight =  '0xD2691E'
    });
    this.start_btn.on("pointerup", () => {
      this.start_btn.setTexture(UI_ASSET_KEYS.BTN_DEF);
      this.start_btn.clearTint();

      let sceneManager = this.scene;
      let sceneKeys = sceneManager.keys;
      
this.scene.start(SCENE_KEYS.GAME_SCENE, {username: this.username, cats: this.user_cat01});
    // FIXME: if texture is not found before render on object, set to invisible or remove
    })
    this.start_btn.text = this.add.text(
      this.start_btn.x - 30,
      this.start_btn.y - 10,
      "Start",
      {
        fill: "#000",
        fontFamily: "Nunito",
        fontSize: "18px",
      }
    ).setDepth(10);
    

    // FIXME: add keyboard input
    // this.input.keyboard.on("keydown-SPACE", () => {
    //   this.scene.start("Main");
    // });
    

    this.opt_btn = this.add.image(
      this.game.canvas.width / 2 - 50,
      this.game.canvas.height / 2 + 130,
      UI_ASSET_KEYS.BTN_DEF
    ).setScale(1.5).setDepth(10);
    this.opt_btn.setInteractive();
    this.opt_btn.on("pointerdown", () => {
      this.opt_btn.setTexture(UI_ASSET_KEYS.BTN_DEF_PRESS);
      this.opt_btn.tintBottomRight = '0xD2691E';
    });
    this.opt_btn.on("pointerup", () => {
      this.time.delayedCall(100, () => {
        this.opt_btn.setTexture(UI_ASSET_KEYS.BTN_DEF_PRESS);
        // change modal
        this.opt_btn.clearTint();
      });
      // this.scene.start("GameScene");
    });
    this.opt_btn.text = this.add.text(
      this.opt_btn.x - 30,
      this.opt_btn.y - 10,
      "Options",
      {
        fill: "#000",
        fontFamily: "Nunito",
        fontSize: "18px",
      }
    ).setDepth(10);

   

    

    const pointer = this.add.image(10, 10, "pointer").setScale(0.75).setDepth(50).setVisible(false);
    this.pointer = pointer;
    pointer.setX(this.start_btn.x - 50);
    pointer.setY(this.start_btn.y);
    pointer.setVisible(true);
    pointer.setInteractive();
    // tween pointer slightly left and right
    this.tweens.add({
      targets: pointer,
      x: pointer.x + 5,
      duration: 1000,
      yoyo: true,
      repeat: -1,

    });
    
    }


    
    spawnCat = (cat_type, y, speed) => {
      const cat = this.add.sprite(-10, y, cat_type).setScale(2.5).setDepth(-10);
      if (speed > 0.5) {
        cat.anims.play("cat" + cat_type + "_run");
      } else {
        cat.anims.play("cat" + cat_type + "_walk");
      }
      this.tweens.add({
        targets: cat,
        x: this.game.canvas.width + 50,
        duration: 25000 - (25000 * speed),
        repeat: 0,
        onComplete: () => {
          this.destroy_count += 1;
          cat.destroy();
        },
      });

      // collision detection with cat
      // if cats overlap push to side
      cat.setInteractive();
      
    }


    update() {

     // if showModal is true, show modal
    const first_btn_x = this.start_btn.x;
    const first_btn_y = this.start_btn.y;
    const second_btn_x = this.opt_btn.x;
    const second_btn_y = this.opt_btn.y;
      
      if (Phaser.Input.Keyboard.JustUp(this.cursors.up)) {
          // Up arrow key was just released

          // Down arrow key was just released
  
          if (this.pointer.y === first_btn_y) {
              this.pointer.y = second_btn_y;
              this.pointer.x = second_btn_x - 50;
          } else {
              this.pointer.y = first_btn_y;
              this.pointer.x = first_btn_x - 50;
          }
      } else if (Phaser.Input.Keyboard.JustUp(this.cursors.down)) {
          // Down arrow key was just released
  
          if (this.pointer.y === first_btn_y) {
              this.pointer.y = second_btn_y;
              this.pointer.x = second_btn_x - 50;
          } else {
              this.pointer.y = first_btn_y;
              this.pointer.x = first_btn_x - 50;
          }

          
      } else if (Phaser.Input.Keyboard.JustUp(this.cursors.space)) {
          // Space bar was just released
        //  if point is in first button istart game
        if (this.pointer.y === first_btn_y) {
          this.start_btn.setTexture(UI_ASSET_KEYS.BTN_DEF_PRESS);
          // this.start_btn.tintBottomRight =  '0xD2691E'
          this.scene.start(SCENE_KEYS.GAME_SCENE, {username: this.username, cats: this.user_cat01});
        } else if (this.pointer.y === second_btn_y) {
          this.opt_btn.setTexture(UI_ASSET_KEYS.BTN_DEF_PRESS);
          this.scene.start(SCENE_KEYS.OPTIONS_SCENE);
          // this.opt_btn.tintBottomRight = '0xD2691E';

          
        }
       
      }

      // if escape key is pressed, close modal
  }

}
