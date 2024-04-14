import {createLabel} from '../common/labels'

export class Lobby extends Phaser.Scene {
  create() {
   const label = createLabel(this, 'hello world')
   label.anchor.setTo(0.5)
  }
}
