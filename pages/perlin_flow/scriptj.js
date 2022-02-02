// input pickup, conversion and setting:
let inputColor = document.getElementById('color')
let noiselvl = document.getElementById('noise')
let lines = document.getElementById('lines')
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

btn.addEventListener('click', () => {

  var colorObj = hexToRgb(inputColor.value)
  stroke(colorObj.r, colorObj.g, colorObj.b)
  noiseScale = noiselvl.value / 100
  num = lines.value * 1000;
})


btn2.addEventListener('click', () => {
  console.log('hey')
  noiseSeed(millis())

})



// color input sneaky fix to make it look better
var color_picker = document.getElementById("color");
var color_picker_wrapper = document.getElementById("color-picker-wrapper");
color_picker.onchange = function () {
  color_picker_wrapper.style.backgroundColor = color_picker.value;
}
color_picker_wrapper.style.backgroundColor = color_picker.value;




// -----------------------------------------------
// P5j setup and drawing:

let particles = []
let num = 1000;
let time = 0
let noiseScale = 0.01;

function setup() {
  createCanvas(window.innerWidth - 2, window.innerHeight - 5);
  for (let i = 0; i < 10000; i++) {
    particles.push(createVector(random(width), random(height)))
  }
  stroke(170, 229, 255)
}

function draw() {
  background(0, 10);
  for (let i = 0; i < num; i++) {
    let p = particles[i]
    point(p.x, p.y)
    let n = noise(noiseScale * p.x, noiseScale * p.y);
    let a = TAU * n
    p.x += cos(a)
    p.y += sin(a)
    if (!onScreen(p)) {
      p.x = random(width)
      p.y = random(height)
    }
  }
}

// if vector is off screen, return true.
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height
}

// number input styling 
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});