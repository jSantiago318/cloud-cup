export class preload {
    preload() {
        this.load.spritesheet("cat01_walk", "/priv/static/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_walk_strip8.png", {
            frameWidth: 320,
            frameHeight: 40
        });
        this.load.spritesheet("cat01_run", "/priv/static/images/catset_assets/catset_spritesheets/cat01_spritesheets/cat01_run_strip8.png", {
            frameWidth: 160,
            frameHeight: 40
        });
        
        this.load.image("background", "/priv/static/images/full version/ui/button maker.png");
    }
}