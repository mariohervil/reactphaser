import Phaser from 'phaser'
// import logoImg from './assets/logo.png'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { Game } from './Game.js'

const config = {
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

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
 <App></App>
  </React.StrictMode>
)
