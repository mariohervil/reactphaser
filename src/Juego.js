import React from 'react'
import Phaser from 'phaser'
import { Game } from './Game.js'
class Juego extends React.Component {
  constructor () {
    super()

    this.config = {
      type: Phaser.AUTO,
      width: 1500,
      height: 800,
      scene: [Game],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 },
          debug: false
        }
      }
    }
  }

  componentDidMount () {
    this.game = new Phaser.Game(this.config)
  }

  render () {
    return (
        <div></div>

    )
  }
}

export { Juego }
