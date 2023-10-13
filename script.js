new TypeIt("#containerText", {
  speed: 100,
  loop: false,
  cursor: false,
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();
