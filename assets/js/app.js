// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//
// NOTE: The contents of this file will only be executed if
import "./user_socket.js"
import "flowbite/dist/flowbite.phoenix.js";
// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
import "phaser"

import { Creator } from "./game/scenes/Creator.js";
import {Game} from "./game/scenes/Game.js";
import {LiveSocket} from "phoenix_live_view"
import { Main } from "./game/scenes/Main.js";
import { Options } from "./game/scenes/Options.js";
import { Patch } from "./game/scenes/Patch.js";
import { PreloadScene } from "./game/keys/preload-scene.js";
import { SCENE_KEYS } from "./game/keys/scene-keys.js";
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import { Stats } from "./game/scenes/Stats.js";

// menu init  
const config_demo ={
    type: Phaser.AUTO,
    scale:{
        width: 1024,
        height: 576,
        parent: "demo",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    }
}

// new Phaser.Game(config)
// add to game element id

if (document.getElementById('demo')) {
    const game = new Phaser.Game(config_demo);
    game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
    game.scene.add(SCENE_KEYS.MAIN_SCENE, Main);
    game.scene.add(SCENE_KEYS.GAME_SCENE, Game);
    game.scene.add(SCENE_KEYS.CREATOR_SCENE, Creator);
    game.scene.add(SCENE_KEYS.OPTIONS_SCENE, Options);
    game.scene.add(SCENE_KEYS.PATCH_SCENE, Patch);
    game.scene.add(SCENE_KEYS.STATS_OPTIONS, Stats);
    game.scene.start(SCENE_KEYS.PRELOAD_SCENE);

}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}})

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()

window.liveSocket = liveSocket