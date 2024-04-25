import { CAT_ASSET_KEYS, CHARACTER_ASSET_KEYS, PLAYER_MOVEMENT, UI_ASSET_KEYS } from "./asset-keys";

import Phaser from "phaser";
import { SCENE_KEYS } from "./scene-keys";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
  }

  preload() {
    console.log(`[${PreloadScene.name}:preload] log`);

    const BASE_URL = "/images";
    const CATSET_ASSETS = `${BASE_URL}/catset_assets/catset_spritesheets`;
    const CAT01_ASSETS = `${CATSET_ASSETS}/cat01_spritesheets`;
    const CAT02_ASSETS = `${CATSET_ASSETS}/cat02_spritesheets`;
    const CAT03_ASSETS = `${CATSET_ASSETS}/cat03_spritesheets`;
    const CAT04_ASSETS = `${CATSET_ASSETS}/cat04_spritesheets`;
    const CAT05_ASSETS = `${CATSET_ASSETS}/cat05_spritesheets`;
    const UI_ASSETS = `${BASE_URL}/full version/ui`;
    const INTERIOR_ASSETS = `${BASE_URL}/interior full 2`;
    const MODERN_UI_ASSETS = `${BASE_URL}/modernuserinterface-win 2/48x48`;
    const UI_ELEMS = `${BASE_URL}/full version`;
    const CROPPED = `${BASE_URL}/cropped`;
    // CAT 01 ASSETS
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_WALL_GRAB,
      `${CAT01_ASSETS}/cat01_wallgrab_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_WALL_CLIMB,
      `${CAT01_ASSETS}/cat01_wallclimb_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_SNEAK,
      `${CAT01_ASSETS}/cat01_sneak_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_SIT,
      `${CAT01_ASSETS}/cat01_sit_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_LIE_DOWN,
      `${CAT01_ASSETS}/cat01_liedown_strip24.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 24,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_LEDGE_IDLE,
      `${CAT01_ASSETS}/cat01_ledgeidle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_LEDGE_GRAB,
      `${CAT01_ASSETS}/cat01_ledgegrab_strip5.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 5,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_LEDGE_STRUGGLE,
      `${CAT01_ASSETS}/cat01_ledgeclimb_struggle_strip12.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 12,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_LEDGE_CLIMB,
      `${CAT01_ASSETS}/cat01_ledgeclimb_strip11.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 11,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_LAND,
      `${CAT01_ASSETS}/cat01_land_strip2.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_JUMP,
      `${CAT01_ASSETS}/cat01_jump_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_IDLE_BLINK,
      `${CAT01_ASSETS}/cat01_idle_blink_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_HURT,
      `${CAT01_ASSETS}/cat01_hurt_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_FRIGHT,
      `${CAT01_ASSETS}/cat01_fright_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_FALL,
      `${CAT01_ASSETS}/cat01_fall_strip3.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_DIE,
      `${CAT01_ASSETS}/cat01_die_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_DASH,
      `${CAT01_ASSETS}/cat01_dash_strip9.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 9,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_FALL,
      `${CAT01_ASSETS}/cat01_crouch_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_FALL,
      `${CAT01_ASSETS}/cat01_attack_strip7.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 7,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_WALK,
      `${CAT01_ASSETS}/cat01_walk_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_RUN,
      `${CAT01_ASSETS}/cat01_run_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT01_IDLE,
      `${CAT01_ASSETS}/cat01_idle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    // CAT 02 ASSETS

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_WALL_GRAB,
      `${CAT02_ASSETS}/cat02_wallgrab_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_WALL_CLIMB,
      `${CAT02_ASSETS}/cat02_wallclimb_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_SNEAK,
      `${CAT02_ASSETS}/cat02_sneak_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_SIT,
      `${CAT02_ASSETS}/cat02_sit_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_LIE_DOWN,
      `${CAT02_ASSETS}/cat02_liedown_strip24.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 24,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_LEDGE_IDLE,
      `${CAT02_ASSETS}/cat02_ledgeidle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_LEDGE_GRAB,
      `${CAT02_ASSETS}/cat02_ledgegrab_strip5.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 5,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_LEDGE_STRUGGLE,
      `${CAT02_ASSETS}/cat02_ledgeclimb_struggle_strip12.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 12,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_LEDGE_CLIMB,
      `${CAT02_ASSETS}/cat02_ledgeclimb_strip11.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 11,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_LAND,
      `${CAT02_ASSETS}/cat02_land_strip2.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_JUMP,
      `${CAT02_ASSETS}/cat02_jump_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 44,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_IDLE_BLINK,
      `${CAT02_ASSETS}/cat02_idle_blink_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_HURT,
      `${CAT02_ASSETS}/cat02_hurt_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_FRIGHT,
      `${CAT02_ASSETS}/cat02_fright_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_FALL,
      `${CAT02_ASSETS}/cat02_fall_strip3.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_DIE,
      `${CAT02_ASSETS}/cat02_die_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_DASH,
      `${CAT02_ASSETS}/cat02_dash_strip9.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 9,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_FALL,
      `${CAT02_ASSETS}/cat02_crouch_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_FALL,
      `${CAT02_ASSETS}/cat02_attack_strip7.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 7,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_WALK,
      `${CAT02_ASSETS}/cat02_walk_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_RUN,
      `${CAT02_ASSETS}/cat02_run_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT02_IDLE,
      `${CAT02_ASSETS}/cat02_idle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    // CAT 03 ASSETS

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_WALL_GRAB,
      `${CAT03_ASSETS}/cat03_wallgrab_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_WALL_CLIMB,
      `${CAT03_ASSETS}/cat03_wallclimb_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_SNEAK,
      `${CAT03_ASSETS}/cat03_sneak_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_SIT,
      `${CAT03_ASSETS}/cat03_sit_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_LIE_DOWN,
      `${CAT03_ASSETS}/cat03_liedown_strip24.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 24,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_LEDGE_IDLE,
      `${CAT03_ASSETS}/cat03_ledgeidle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_LEDGE_GRAB,
      `${CAT03_ASSETS}/cat03_ledgegrab_strip5.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 5,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_LEDGE_STRUGGLE,
      `${CAT03_ASSETS}/cat03_ledgeclimb_struggle_strip12.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 12,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_LEDGE_CLIMB,
      `${CAT03_ASSETS}/cat03_ledgeclimb_strip11.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 11,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_LAND,
      `${CAT03_ASSETS}/cat03_land_strip2.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_JUMP,
      `${CAT03_ASSETS}/cat03_jump_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_IDLE_BLINK,
      `${CAT03_ASSETS}/cat03_idle_blink_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_HURT,
      `${CAT03_ASSETS}/cat03_hurt_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_FRIGHT,
      `${CAT03_ASSETS}/cat03_fright_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_FALL,
      `${CAT03_ASSETS}/cat03_fall_strip3.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_DIE,
      `${CAT03_ASSETS}/cat03_die_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_DASH,
      `${CAT03_ASSETS}/cat03_dash_strip9.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 9,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_FALL,
      `${CAT03_ASSETS}/cat03_crouch_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_FALL,
      `${CAT03_ASSETS}/cat03_attack_strip7.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 7,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_WALK,
      `${CAT03_ASSETS}/cat03_walk_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_RUN,
      `${CAT03_ASSETS}/cat03_run_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT03_IDLE,
      `${CAT03_ASSETS}/cat03_idle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    // CAT 04 ASSETS

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_WALL_GRAB,
      `${CAT04_ASSETS}/cat04_wallgrab_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_WALL_CLIMB,
      `${CAT04_ASSETS}/cat04_wallclimb_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_SNEAK,
      `${CAT04_ASSETS}/cat04_sneak_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_SIT,
      `${CAT04_ASSETS}/cat04_sit_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_LIE_DOWN,
      `${CAT04_ASSETS}/cat04_liedown_strip24.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 24,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_LEDGE_IDLE,
      `${CAT04_ASSETS}/cat04_ledgeidle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_LEDGE_GRAB,
      `${CAT04_ASSETS}/cat04_ledgegrab_strip5.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 5,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_LEDGE_STRUGGLE,
      `${CAT04_ASSETS}/cat04_ledgeclimb_struggle_strip12.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 12,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_LEDGE_CLIMB,
      `${CAT04_ASSETS}/cat04_ledgeclimb_strip11.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 11,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_LAND,
      `${CAT04_ASSETS}/cat04_land_strip2.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_JUMP,
      `${CAT04_ASSETS}/cat04_jump_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_IDLE_BLINK,
      `${CAT04_ASSETS}/cat04_idle_blink_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_HURT,
      `${CAT04_ASSETS}/cat04_hurt_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_FRIGHT,
      `${CAT04_ASSETS}/cat04_fright_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_FALL,
      `${CAT04_ASSETS}/cat04_fall_strip3.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_DIE,
      `${CAT04_ASSETS}/cat04_die_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_DASH,
      `${CAT04_ASSETS}/cat04_dash_strip9.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 9,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_FALL,
      `${CAT04_ASSETS}/cat04_crouch_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_FALL,
      `${CAT04_ASSETS}/cat04_attack_strip7.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 7,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_WALK,
      `${CAT04_ASSETS}/cat04_walk_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_RUN,
      `${CAT04_ASSETS}/cat04_run_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT04_IDLE,
      `${CAT04_ASSETS}/cat04_idle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    // CAT 05 ASSETS

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_WALL_GRAB,
      `${CAT05_ASSETS}/cat05_wallgrab_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_WALL_CLIMB,
      `${CAT05_ASSETS}/cat05_wallclimb_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_SNEAK,
      `${CAT05_ASSETS}/cat05_sneak_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_SIT,
      `${CAT05_ASSETS}/cat05_sit_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_LIE_DOWN,
      `${CAT05_ASSETS}/cat05_liedown_strip24.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 24,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_LEDGE_IDLE,
      `${CAT05_ASSETS}/cat05_ledgeidle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_LEDGE_GRAB,
      `${CAT05_ASSETS}/cat05_ledgegrab_strip5.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 5,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_LEDGE_STRUGGLE,
      `${CAT05_ASSETS}/cat05_ledgeclimb_struggle_strip12.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 12,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_LEDGE_CLIMB,
      `${CAT05_ASSETS}/cat05_ledgeclimb_strip11.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 11,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_LAND,
      `${CAT05_ASSETS}/cat05_land_strip2.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_JUMP,
      `${CAT05_ASSETS}/cat05_jump_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_IDLE_BLINK,
      `${CAT05_ASSETS}/cat05_idle_blink_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_HURT,
      `${CAT05_ASSETS}/cat05_hurt_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_FRIGHT,
      `${CAT05_ASSETS}/cat05_fright_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_FALL,
      `${CAT05_ASSETS}/cat05_fall_strip3.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_DIE,
      `${CAT05_ASSETS}/cat05_die_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_DASH,
      `${CAT05_ASSETS}/cat05_dash_strip9.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 9,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_FALL,
      `${CAT05_ASSETS}/cat05_crouch_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );
    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_FALL,
      `${CAT05_ASSETS}/cat05_attack_strip7.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 7,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_WALK,
      `${CAT05_ASSETS}/cat05_walk_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_RUN,
      `${CAT05_ASSETS}/cat05_run_strip4.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 4,
      }
    );

    this.load.spritesheet(
      CAT_ASSET_KEYS.CAT05_IDLE,
      `${CAT05_ASSETS}/cat05_idle_strip8.png`,
      {
        frameWidth: 40,
        frameHeight: 40,
        endFrame: 8,
      }
    );


    // CHARACTER ASSETS
    // FIXME: Add all character assets
  
    this.load.spritesheet(
      CHARACTER_ASSET_KEYS.CHAR1_WALK,
      `${BASE_URL}/Character/separate/walk/char1_walk.png`,
      {
        frameWidth: 32,
        frameHeight: 32,
      },
    ); 

    // sprite sheet from previous example
    this.load.spritesheet(
      CHARACTER_ASSET_KEYS.CHAR1_PICKUP, 
      `${BASE_URL}/Character/separate/pickup/char1_pickup.png`,
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    
    )
    this.load.image(
      CHARACTER_ASSET_KEYS.SHADOW,
      `${BASE_URL}/Character/shadow.png`
    );
    












    this.load.image(UI_ASSET_KEYS.BTN_DEF, `${CROPPED}/btn_def.png`);
    this.load.image(UI_ASSET_KEYS.BTN_DEF_PRESS, `${CROPPED}/btn_press.png`);
    this.load.image(UI_ASSET_KEYS.COIN, `${CROPPED}/coin.png`);

    this.load.image(
      UI_ASSET_KEYS.UI_BTN_MAKER,
      `${UI_ASSETS}/button maker.png`
    );
    this.load.image(UI_ASSET_KEYS.START_BTN, `${UI_ASSETS}/start_btn.png`);
    this.load.image(UI_ASSET_KEYS.ALL_UI, `${UI_ASSETS}/UI_all.png`);
    this.load.image(
      UI_ASSET_KEYS.ALL_INTERIOR,
      `${INTERIOR_ASSETS}/global.png`
    );
    this.load.tilemapTiledJSON(
      UI_ASSET_KEYS.INTERIOR_LOADING,
      "/images/tiled/interior_map.json"
    );
    this.load.image(
      UI_ASSET_KEYS.MOD_UI_STYLE_1_48X48,
      `${MODERN_UI_ASSETS}/Modern_UI_Style_1_48x48.png`
    );
    this.load.image(UI_ASSET_KEYS.FARM_REF, `${UI_ELEMS}/global.png`);
    this.load.image(UI_ASSET_KEYS.POINTER, `${MODERN_UI_ASSETS}/pointer.png`);
  }

  init() {}

  create() {

    this.anims.create({
      key: PLAYER_MOVEMENT.LEFT,
      frames: this.anims.generateFrameNumbers(CHARACTER_ASSET_KEYS.CHAR1_WALK, {
        start: 2,
        end: 4,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });
    this.anims.create({
      key: PLAYER_MOVEMENT.UP,
      frames: this.anims.generateFrameNumbers(CHARACTER_ASSET_KEYS.CHAR1_WALK, {
        start: 8,
        end: 16,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });


    this.anims.create({
      key: PLAYER_MOVEMENT.PICKUP,
      frames: this.anims.generateFrameNumbers(CHARACTER_ASSET_KEYS.CHAR1_PICKUP, {
        start: 0,
        end: 4,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });


    this.anims.create({
      key: "cat01_walk",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT01_WALK, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat01_run",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT01_RUN, {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });
    this.anims.create({
      key: "cat02_walk",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT02_WALK, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat02_run",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT02_RUN, {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });
    this.anims.create({
      key: "cat02_idle",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT02_IDLE, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat03_walk",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT03_WALK, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat03_run",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT03_RUN, {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });
    this.anims.create({
      key: "cat03_idle",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT03_IDLE, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat04_walk",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT04_WALK, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat04_run",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT04_RUN, {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });
    this.anims.create({
      key: "cat04_idle",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT04_IDLE, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat05_walk",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT05_WALK, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    this.anims.create({
      key: "cat05_run",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT05_RUN, {
        start: 0,
        end: 3,
      }),
      delay: 0,
      duration: 700,
      repeat: -1,
    });
    this.anims.create({
      key: "cat05_idle",
      frames: this.anims.generateFrameNumbers(CAT_ASSET_KEYS.CAT05_IDLE, {
        start: 0,
        end: 7,
      }),
      delay: 0,
      duration: 1000,
      repeat: -1,
    });
    
    console.log(`[${PreloadScene.name}:create] log`);
    this.scene.start(SCENE_KEYS.MAIN_SCENE);
  }
  udpate() {}
}
