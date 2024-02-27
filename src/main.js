import kaboom from "kaboom";

// initialize context
kaboom();
setGravity(1200);

// load assets
loadSpriteAtlas("sprites/player_tilesheet.png",
{
  "player": {
    "x": 0,
    "y": 0,
    "width": 720,
    "height": 330,
    "sliceX": 9,
    "sliceY": 3,
    anims: {
      idle: 23,
      run: { from: 9, to: 10, speed: 4, loop: true, },
    },
  },
});
// loadSprite("bean", "sprites/bean.png");

scene("game", () => {

const bean = add([
  sprite("player", {anim: "idle"}),
  pos(800, 400),
  scale(1),
  area(),
  body()
]);

// add ground
add([
  rect(width(), 48),
  pos(0, height() - 48),
  outline(4),
  area(),
  body({ isStatic: true }),
  color(127, 200, 255),
])

// add tree
function spawnTree() {
  add([
    rect(48, 64),
    area(),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"),
    color(255, 180, 255),
    move(LEFT, 240),
    "tree"
  ]);
  wait(1.5, () => {
    spawnTree();
  })
}

// spawnTree();

bean.onCollide("tree", () => {
  addKaboom(bean.pos);
  shake();
  go("game-over");
});

onKeyPress("space", () => {
  if (bean.isGrounded()) {
    bean.jump();
  }
})

onKeyDown("right", () => {
  bean.move(240, 0);
})

onKeyPress("right", () => {
  bean.flipX = false;
  bean.play("run");
})

onKeyRelease("right", () => {
  bean.play("idle");
})

onKeyDown("left", () => {
  bean.move(-240, 0);
})

onKeyPress("left", () => {
  bean.flipX = true;
  bean.play("run");
})

onKeyRelease("left", () => {
  bean.play("idle");
})

let score = 0;
const scoreLabel = add([
    text(score),
    pos(24, 24)
])

// increment score every frame
onUpdate(() => {
  score++;
  scoreLabel.text = score;
  if(bean.pos.y >= height()) {
    go("game-over");
  }
});

});


scene("game-over", () => {
  add([
    text("Game Over", 32),
    pos(width() / 2, height() / 2),
  ]);
})

go("game");
