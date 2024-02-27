import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSpriteAtlas("sprites/sprites.png",
{
  "hole": {
    "x": 0,
    "y": 0,
    "width": 1140,
    "height": 1152,
    "sliceX": 6,
    "sliceY": 8,
    anims: {
      empty: 0,
      popup: { from: 1, to: 5, speed: 4, loop: false, },
    },
  },
});

scene("game", () => {

for (let n = 0; n < 5; n++) {
  for (let i = 0; i < 3; i++) {
    Rad
    add([ sprite("hole"), 
    anchor("center"),
    "hole", 
    pos(150+width()/7.5*n, 100+height()/4.5*i), 
    {anim: "popup"} ]);
  }
}


// let score = 0;
// const scoreLabel = add([
//     text(score),
//     pos(24, 24)
// ])

// increment score every frame
onUpdate(() => {
  // score++;
  // scoreLabel.text = score;
  // if(bean.pos.y >= height()) {
  //   go("game-over");
  // }
});

});


scene("game-over", () => {
  add([
    text("Game Over", 32),
    pos(width() / 2, height() / 2),
  ]);
})

go("game");
