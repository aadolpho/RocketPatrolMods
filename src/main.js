var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
  
  var game = new Phaser.Game(config);
  
  function preload() {
    this.load.image('yayback', 'yayback.png');
  }
  
  
  function create() {
    this.add.image(640, 480, 'yayback');
  }
  
  function update() {
  
  }

//let config = {
//    type: Phaser.CANVAS,
//    width: 640,
//    height: 480,
//    scene: [ Menu, Play ]
//}

//let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;



    //scene: {
      //  preload: preload,
        //create: create,
        //update: update
    //}
  //};