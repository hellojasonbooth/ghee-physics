
// two separate things matter.js needs
// first is an engine - computation and math behind this
// second a renderer - which draws what is actually happening


// shortcut to make our code cleaner
const {Engine, Render, Bodies, World, MouseConstraint, Query, Composite} = Matter 

// pick where matter is being deployed
const sectionTag = document.querySelector('section.shapes')
// what is the width and height of the page
const w = window.innerWidth
const h = window.innerHeight

const engine = Engine.create()
const renderer = Render.create({
  element: sectionTag,
  engine: engine,
  options: {
    height: h,
    width: w,
    background: '#F7C4C4',
    wireframes: false,
    pixelRatio: window.devicePixelRatio
  }
})



// make a shape from a sprite - plus making it retina friendly
const shapeGhee = Bodies.rectangle(w / 2 , h, 360, 154, {
  restitution: 0.8,
  chamfer: { 
    radius: [30, 50, 40, 30]
  },
  render: {
    sprite: {
      texture: '../img/ghee-logo-v2.png',
      xScale: 0.5,
      yScale: 0.5
    }
  }
})

// make a shape from a sprite - plus making it retina friendly
const shapeMotto = Bodies.rectangle(w / 2 - 100, h / 2 , 269, 30, {
  restitution: 0.8,
  render: {
    sprite: {
      texture: '../img/ghee-motto.png',
      xScale: 0.5,
      yScale: 0.5
    }
  }
})

// make a shape from a sprite - plus making it retina friendly
const shapePercentage = Bodies.rectangle(0 + 171, 0 , 51, 342, {
  restitution: 0.8,
  chamfer: { 
      radius: [0, 20, 0, 20]
    },
  render: {
    sprite: {
      texture: '../img/percentage.png',
      xScale: 0.5,
      yScale: 0.5
    }
  }
})

// make a shape from a sprite - plus making it retina friendly
const shapeJar = Bodies.rectangle(w - 95, 0 , 190, 290, {
  restitution: 0.8,
  chamfer: { 
      radius: [20, 20, 20, 20]
    },
  render: {
    sprite: {
      texture: '../img/ghee_jar.png',
      xScale: 0.5,
      yScale: 0.5
    }
  }
})

// make a shape from a sprite - plus making it retina friendly
const shapeHundred = Bodies.rectangle(0 + 55, 0 , 110, 302, {
  restitution: 0.8,
  render: {
    sprite: {
      texture: '../img/100.png',
      xScale: 0.5,
      yScale: 0.5
    }
  }
})



// here we can make option and pass in the variables to shapes
// for cleaner code
const wallOptions = {
  isStatic: true,
  render: {
    visible: false
  }
}

// create walls
const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions)
const ceiling = Bodies.rectangle(w / 2, - 50, w + 100, 100, wallOptions)
const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions)
const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions)

// add mouse interaction
const mouseControl = MouseConstraint.create(engine, {
  element: sectionTag,
  constraint: {
    render: {
      visible: false
    }
  }
})


window.addEventListener('deviceorientation', function (event) {
  if (window.innerWidth < 500) {
    engine.world.gravity.y = event.beta / 40
  	engine.world.gravity.x = event.gamma / 40
  }
})



// add shapes to the world
World.add(engine.world, [
  shapeGhee,
  shapeMotto,
  shapePercentage,
  shapeJar,
  shapeHundred,
  ground,
  ceiling,
  leftWall,
  rightWall,
  mouseControl
])


// alter gravity
engine.world.gravity.y = 5;
// run both the engine and the renderer
// run engine
Engine.run(engine)
// run render
Render.run(renderer)


// on window resize, reload window
window.onresize = function () {
  location.reload()
}





