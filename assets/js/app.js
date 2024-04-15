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
import "flowbite/dist/flowbite.phoenix.js";
// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
import "phaser"

import { Creator } from "./game/Creator";
import { Demo } from "./game/Demo.js";
import {Game} from "./Game";
import {LiveSocket} from "phoenix_live_view"
import { Main } from "./game/Main";
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"

// menu init  
const config ={
    type: Phaser.AUTO,
    width: '85%',
    height: '90%',
    parent: "game",
    scene: [Game, Main, Creator]
}
const config_demo ={
    type: Phaser.AUTO,
    width: '85%',
    height: '90%',
    parent: "demo",
    scene: Demo
}

// new Phaser.Game(config)
// add to game element id
if (document.getElementById('game')) {
    new Phaser.Game(config);
    
}
if (document.getElementById('demo')) {
    new Phaser.Game(config_demo);
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