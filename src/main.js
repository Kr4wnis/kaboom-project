import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSprite("bean", "sprites/bean.png");

add([
  sprite("bean"),
  pos(80, 80),
  scale(1),
]);