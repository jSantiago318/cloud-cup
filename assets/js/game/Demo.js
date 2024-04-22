import { Game } from "phaser";
import Phaser from "phaser";
export class Demo extends Phaser.Scene {
  
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
    super("Demo");
    // username
    this.username = randomUsername();
    // modal state
    this.modal = false;
    // cat01
    this.user_cat01 = [101];
    this.cursors = null;
    this.start_btn = null;
    this.player_opt = null;
    
    this.total_entities = 0;
    this.destroy_count = 0;
  
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
    this.load.spritesheet(
      "cat02_walk",
      "/images/catset_assets/catset_spritesheets/cat02_spritesheets/cat02_walk_strip8.png",
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );    
    this.load.spritesheet(
      "cat02_run",
      "/images/catset_assets/catset_spritesheets/cat02_spritesheets/cat02_run_strip4.png",
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      "cat02_idle",
      "/images/catset_assets/catset_spritesheets/cat02_spritesheets/cat02_idle_strip8.png",
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
    this.load.image("btn_def", "/images/cropped/btn_def.png");
    this.load.image("btn_press", "/images/cropped/btn_press.png");

    this.load.image(
      "mui_1",
      "/images/modernuserinterface-win 2/48x48/Modern_UI_Style_1_48x48.png"
    );
    this.load.tilemapTiledJSON("map", "/images/tiled/tiled_menu_intro.json");
    this.load.image("pointer", "/images/modernuserinterface-win 2/48x48/pointer.png");
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

    this.time.addEvent({
      delay: 100,
      callback: () => {
        for (let i = 0; i < 10; i++) {
          const randomY = Math.floor(Math.random() * this.game.canvas.height);
      // random speed range [30% -> 85%]
    const randomSpeed = 0.3 + Math.random() * 0.15;
    this.spawnCat("02", randomY, randomSpeed);
    this.total_entities += 1;
          total_entites.setText(this.total_entities);
        }     

      },
      repeat: -1,
    })

    // spawn tick cat02
    this.time.addEvent({
      delay: 100,
      callback: () => {
        for (let i = 0; i < 10; i++) {
          const randomY = Math.floor(Math.random() * this.game.canvas.height);
// random speed range [40% -> 75%]
const randomSpeed = 0.3 + Math.random() * 0.45;
          // spawnCat02.call(this, randomY, randomSpeed);
          this.spawnCat("01", randomY, randomSpeed);
          this.total_entities += 1;
          total_entites.setText(this.total_entities);
        }
      },
      repeat: -1,
    });

     
  }

  create() {
   
  
    
    this.cursors = this.input.keyboard.createCursorKeys();

// img cropped  pointer to show button if key is pressed
// const pointer = this.add.image(10, 10, "pointer").setScale(1.5).setDepth(10);
// hide pointer
 

    // anim import call
    this.anims.create({
      key: "cat01_walk",
      frames: this.anims.generateFrameNumbers("cat01_walk", {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat01_run",
      frames: this.anims.generateFrameNumbers("cat01_run", {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat02_walk",
      frames: this.anims.generateFrameNumbers("cat02_walk", {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat02_run",
      frames: this.anims.generateFrameNumbers("cat02_run", {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat02_idle",
      frames: this.anims.generateFrameNumbers("cat02_idle", {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });


    

// 
    
    // this.add.text(100, 100, email, {fill: "#0f0"});

    const map = this.make.tilemap({
      key: "map",
      tileHeight: 48,
      tileWidth: 48,
    });
    const tileset = map.addTilesetImage("mui1", "mui_1");

    const layer = map.createLayer(
      "tile_lay_1",
      tileset,
      this.game.canvas.width * 0.15,
      this.game.canvas.height * 0.05
    );
  
    const title = map.createLayer(
      "title",
      tileset,
      this.game.canvas.width * 0.15,
      this.game.canvas.height * 0.05
    ).setScale(1);

    // add text to title
const title_text = this.add.text(
    // show on top of title
    this.game.canvas.width / 2 - 100,
    this.game.canvas.height / 3,
      "Typing Kitties", //FIXME: centralize title ?dynamic centering?
      {
        fontFamily: "Nunito",
        // bold
        fontStyle: "bold",
        fontSize: "40px",
        fill: "#000",
      }
    ).setDepth(10)


  
   this.start_btn = this.add.image(
      this.game.canvas.width / 2 - 50,
      this.game.canvas.height / 2 + 50,
      "btn_def"
    ).setScale(1.5).setDepth(10);
    this.start_btn.setInteractive();
    this.start_btn.on("pointerdown", () => {
      this.start_btn.setTexture("btn_press");
      this.start_btn.tintBottomRight =  '0xD2691E'
    });
    this.start_btn.on("pointerup", () => {
      this.start_btn.setTexture("btn_def");
      this.start_btn.clearTint();

      let sceneManager = this.scene;
      let sceneKeys = sceneManager.keys;
      
this.scene.start("Game", {username: this.username, cats: this.user_cat01});
this.scene.stop("Demo");
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
    




    this.player_opt = this.add.image(
      this.game.canvas.width / 2 - 50,
      this.game.canvas.height / 2 + 130,
      "btn_def"
    ).setScale(1.5).setDepth(10);
    this.player_opt.setInteractive();
    this.player_opt.on("pointerdown", () => {
      this.player_opt.setTexture("btn_press");
      this.player_opt.tintBottomRight = '0xD2691E';
    });
    this.player_opt.on("pointerup", () => {
      this.time.delayedCall(100, () => {
        this.player_opt.setTexture("btn_def");
        // change modal
        this.modal = true;
        this.player_opt.clearTint();
      });
      // this.scene.start("GameScene");
    });
    this.player_opt.text = this.add.text(
      this.player_opt.x - 30,
      this.player_opt.y - 10,
      "Player",
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
      x: pointer.x + 7,
      duration: 1000,
      yoyo: true,
      repeat: -1,

    });
    }


    
    spawnCat = (cat_type, y, speed) => {
      const cat = this.add.sprite(-10, y, cat_type).setScale(2.5).setDepth(-10);
      cat.anims.play("cat" + cat_type + "_walk");
      this.tweens.add({
        targets: cat,
        x: this.game.canvas.width,
        duration: 20000,
        repeat: 0,
        onComplete: () => {
          this.destroy_count += 1;
          cat.destroy();
        },
      });
    }


    update() {

     // if showModal is true, show modal
     if (this.modal) {
      // create a layer above all other layers 
      const modal = this.add.graphics().setDepth(100);  
      // fill modal with black color
      modal.fillStyle(0x000000, 0.5);
      // draw rectangle
      modal.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
      // add text to modal
      const modal_text = this.add.text(
        this.game.canvas.width / 2 - 100,
        this.game.canvas.height / 2 - 100,
        "<-",
        {
          fill: "#0f0",
          fontFamily: "Nunito",
          fontSize: "24px",
        }
      ).setDepth(100);
      modal_text.setInteractive();
      modal_text.on("pointerdown", () => {
        this.modal = false;
      });
      // uername
      
      const username = this.add.text(
        this.game.canvas.width / 2 - 100,
        this.game.canvas.height / 2 - 50,
        this.username,
        {
          fill: "#0f0",
          fontFamily: "Nunito",
          fontSize: "24px",
        }
      ).setDepth(100);
      // cats
      const cats = this.add.text(
        this.game.canvas.width / 2 - 100,
        this.game.canvas.height / 2,
        this.user_cat01,
        {
          fill: "#0f0",
          fontFamily: "Nunito",
          fontSize: "24px",
        }
      ).setDepth(100);  
      
      
    }

    const first_btn_x = this.start_btn.x;
    const first_btn_y = this.start_btn.y;
    const second_btn_x = this.player_opt.x;
    const second_btn_y = this.player_opt.y;
      
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
          this.start_btn.setTexture("btn_press");
          this.start_btn.tintBottomRight =  '0xD2691E'
          this.scene.start("Game", {username: this.username, cats: this.user_cat01});
          this.scene.stop("Demo");
        } else if (this.pointer.y === second_btn_y) {
          this.player_opt.setTexture("btn_press");

          this.modal = true;
          this.player_opt.tintBottomRight = '0xD2691E';
          
        }
       
      }

      // if escape key is pressed, close modal
  }

}
