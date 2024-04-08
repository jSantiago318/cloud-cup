
export function preload() {
  // ... your preload code here ...
  // presets
  const presets = {
    title: "assets/img/presets/batch2x/title 1.png" ,
    audio_on:  "assets/img/presets/batch2x/audio_on.png" ,
    audio_off:  "assets/img/presets/batch2x/audio_off.png" ,
    btn:  "assets/img/presets/batch1x/btn.png" ,
    btn_p:  "assets/img/presets/batch1x/btn_p.png" ,
    pack_icon: "assets/img/presets/batch2x/package 1.png" ,
    select_icon: "assets/img/presets/batch2x/sel_icon 1.png" ,     
  };

//   <img src={ Routes.static_path(@conn, "/images/psi.png")} />
  
  // is bat
  

  this.load.image("title",  presets.title)
  this.load.image("audio_on", presets.audio_on)
  this.load.image("audio_off", presets.audio_off) 
  this.load.image("btn", presets.btn)
  this.load.image("btn_p", presets.btn_p)
  this.load.image("pack_icon",  presets.pack_icon)
  this.load.image("select_icon",    presets.select_icon)


  
 // cat walk and sneak spritesheets
 
      this.load.spritesheet({
        key: "cat01_walk_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat01_spritesheets/cat01_walk_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat01_sneak_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat01_spritesheets/cat01_sneak_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat02_walk_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat02_spritesheets/cat02_walk_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat02_sneak_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat02_spritesheets/cat02_sneak_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat03_walk_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat03_spritesheets/cat03_walk_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat03_sneak_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat03_spritesheets/cat03_sneak_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat04_walk_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat04_spritesheets/cat04_walk_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat04_sneak_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat04_spritesheets/cat04_sneak_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat05_walk_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat05_spritesheets/cat05_walk_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });
      this.load.spritesheet({
        key: "cat05_sneak_strip8",
        url: "assets/img/catsets/catset_spritesheets/cat05_spritesheets/cat05_sneak_strip8.png",
        frameConfig: { frameWidth: 40, frameHeight: 40, endFrame: 7 },
      });



      // meow knight 
       

  };