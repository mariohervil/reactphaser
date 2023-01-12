import Phaser from 'phaser'
export class Game extends Phaser.Scene {
  preload () {
    // necesario un servidor para servir las imágenes (Live Server VSCode sirve, o cualquiera en puerto 5500 con cors all)
    this.load.image('fondo', '//127.0.0.1:5500/src/assets/fondo.jpg')
    this.load.image('lineas', '//127.0.0.1:5500/src/assets/lineas.jpg')
    this.load.image('pelota', '//127.0.0.1:5500/src/assets/pelota.png')
  }

  create () {
    this.physics.world.setBoundsCollision(false, false, true, true)
    this.add.image(750, 400, 'fondo')

    this.canoa1 = this.physics.add.sprite(100, 400, 'lineas').setImmovable()
    this.canoa1.body.allowGravity = false
    this.canoa1.setCollideWorldBounds(true)

    this.p1 = this.input.keyboard.createCursorKeys()
    // ------------------------------------------------------------------------//
    this.canoa2 = this.physics.add.image(1400, 400, 'lineas').setImmovable()
    this.canoa2.body.allowGravity = false
    this.canoa2.setCollideWorldBounds(true)

    this.p2 = this.input.keyboard.addKeys('A,W,S,D')
    // ------------------------------------------------------------------------//
    this.pelota = this.physics.add.image(750, 100, 'pelota')
    this.pelota.setCollideWorldBounds(true)

    this.pelota.setBounce(1.1)

    let velocity = 100 * Phaser.Math.Between(1.3, 2)
    if (Phaser.Math.Between(0, 10) > 5) {
      velocity = 0 - velocity
    }

    this.pelota.setVelocity(velocity, 10)
    // ------------------------------------------------------------------------//

    this.physics.add.collider(this.pelota, this.canoa1)
    this.physics.add.collider(this.pelota, this.canoa2)

    this.score1 = 0
    this.score2 = 0

    this.scoreText1 = this.add.text(620, 16, this.score1, { fontSize: '100px', fill: '#FFFFFF' })

    this.scoreText2 = this.add.text(820, 16, this.score2, { fontSize: '100px', fill: '#FFFFFF' })
  }

  update () {
    if (this.p1.up.isDown) {
      this.canoa2.setVelocityY(-250)
    } else if (this.p1.down.isDown) {
      this.canoa2.setVelocityY(250)
    } else {
      this.canoa2.setVelocityY(0)
    }
    // ----------------------------------------//
    if (this.p2.W.isDown) {
      this.canoa1.setVelocityY(-250)
    } else if (this.p2.S.isDown) {
      this.canoa1.setVelocityY(250)
    } else {
      this.canoa1.setVelocityY(0)
    }

    if (this.pelota.x < 0) {
      this.score2 += 1
      this.scoreText2.setText(this.score2)
      this.pelota.setPosition(750, 100)

      let velocity = 100 * Phaser.Math.Between(1.3, 2)
      if (Phaser.Math.Between(0, 10) > 5) {
        velocity = 0 - velocity
      }

      this.pelota.setVelocity(velocity, 10)
    } else if (this.pelota.x > 1500) {
      this.score1 += 1
      this.scoreText1.setText(this.score1)
      this.pelota.setPosition(750, 100)

      let velocity = 100 * Phaser.Math.Between(1.3, 2)
      if (Phaser.Math.Between(0, 10) > 5) {
        velocity = 0 - velocity
      }

      this.pelota.setVelocity(velocity, 10)
    }
    if (this.score1 === 6) {
      this.scene.pause()
      this.p1win = this.add.text(350, 350, 'Player 1 wins', { fontSize: '100px', fill: '#FFFFFF' })
    }
    if (this.score2 === 6) {
      this.scene.pause()
      this.p2win = this.add.text(350, 350, 'Player 2 wins', { fontSize: '100px', fill: '#FFFFFF' })
    }
  }
}
