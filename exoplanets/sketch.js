var stars = [];
var speed;
var planets = [];
var warp = true;
var planetinfo = [];
var planetname = [];
var stage = 0;
var selected;
var universe;
var planetImg =[];




function preload(){
  universe = loadImage('assets/Exoplanet edits/Universe.png');

  digitalFont = loadFont('assets/DS-DIGII.TTF');

  planetinfo.push("This planet was the first planet to be detected orbiting a sun- like star", "Known to some as the 'Diamond Planet', the carbon heavy chemistry of the planet and extreme gravitational pull of the core makes the inside of the planet 33% pure diamond covered in a lava coated surface.", "This planet was the first exoplanet discovered to have a rocky surface proving that Earth- like worlds were possible in other solar systems. It was also the first planet classified as a 'Super Earth'", "Europa is a moon of Jupiter believed to have a rocky mantle and molten core. Despite its frozen surface, there is evidence of a salty ocean underneath and the possibility of life.", "This planet is known as a 'water world' because its entire surface is covered in an ocean. The core is coated in a type of ice called ice 7 that is created by immense gravity from the planet's core and is unlike any ice found on Earth.", "Despite this planet's icey surface it is constantly on fire. Strong gravity from the core keeps the water in a hyper condensed ice state while the surface burns.", "This is an earth- like planet with one side always dark and the other always facing its star. Because of this the dark side is always freezing while the other is scorched by its star. There is one stri between the two sides which could be habitable and support life.", "This planet orbits not one, not two, but three stars simultaneously, standing on this planet you would have three shadows and experience spectacular sunsets and sunrises.", "On this planet, rain is made of silicone glass. Due to high winds this glass rain seems to fall sideways.", "This planets nickname is Osiris. This scorched planet is evaporating so quickly that it promoted a new class of planets called Chthonian planets. It is mostly the dead core of a mostly evaporated gas giant.", "This was the first rocky planet found within the goldilock zone. It is very close to the size of earth but the makeup of the surface of the planet is unknown", "This was Kepler's first rocky planet discovery. It is an earth size world believed to have a lava ocean on the surface. It is 20 times closer to its star than mercury is to the sun.", "This planet is a real life 'Tatoonie', it was the first discovery of a planet orbiting two stars.", "This planet is in the habitable zone and is a possible water- world unlike anything in our solar system. The surface temperature should be around 72 degrees fahrenheit.", "This planet is the most similar planet to Earth ever found. It scored a 0.88 out of 1 on the Earth Similarity Index.", "Nicknamed 'Methuselah', it is the oldest known exoplanet at 12.7 billion years old, formed when the milky way was in its infancy. It orbits binary matched stars, one is a white dwarf and the other is a pulsar.", "This planet orbits a pulsar. Standing on the surface it would appear that the sun is a strobe light.", "One of 7 planets orbiting a star in the constellation Aquarius. They are all within the habitable zone meaning they could all be rocky and have liquid water.", "This is the darkest planet in the Universe. The phenomena is most likely caused by light absorbing gasses in the atmosphere. The planet glows red like coal due to extremely high surface temperatures.", "This is the largest exoplanet ever discovered. It is over 1.7 times the size of Jupiter and called a Puffy Planet due to extremely low density. It has about the same density as a cork, if you could place the planet in a giant tub it would float.", "This planet is being slowly swallowed by its star. Material from the planet spills into the star as it makes one orbit per day. The atmosphere traps 94% of visible light.", "This planet has a retrograde orbit meaning it orbits its star in the opposite direction that the star spins. It also breaks the rules of how large planets 'can be'");

  planetname.push("51 Pegasi B", "55 Cancri E", "CoRoT 7b", "Europa", "GJ 1214 b", "Gliese 436 b", "Gliese 581 C", "HD 188753 AB", "HD 189733 B", "HD 209458 B", "Kepler 186 F", "Kepler 10 B", "Kepler 16 B", "Kepler 22 B", "Kepler 438 B", "PSR B162026 B", "PSR J17191483 B", "Trappist 1f", "TrES 2", "TrES 4", "Wasp 12 B", "Wasp 17 B");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(window.innerWidth,window.innerHeight);
  textSize(20);
  textFont(digitalFont);

  for ( var i = 1 ; i <= 22 ; i++) {
    planetImg.push( createPlanet(i) );
  }
  stage = 3;
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  speed = 50;
}

function draw() {
  //uncomment below to use mouse to affect speed
//speed = map(mouseX, 0, width, 0, 50);
  //image('assets/Exoplanet edits/Universe.png');
  if (stage == 0) { // warp
    speed = 50;
    background(0);
    drawStars();
  } else if (stage == 1) { // select random
    selected = floor( random(0,planetImg.length));
    stage++;
    drawStars();
  }
  else if (stage == 2) { // slow down & show planet
    speed = speed/1.1;
    background(0);
    //image(planets[selected], 20, 0, width/2, height, 0, 0);
    //image(planets[3],1,0);
    drawStars();
    const txtpad =20;
    image(planetImg[selected], 10, 0, width/2, height);
    shadow();
    //highlight();
    fill(250,250,250);
    text(planetname[selected], (width/2)+txtpad, height/2, (width/2)-(2*txtpad), height/2);
    text(planetinfo[selected], (width/2)+txtpad, height/1.8, (width/2)-(2*txtpad), height/2);
    background(0,0,0,map(speed,0,50,0.,1.));
  }   else if (stage == 3) { // show initial universe map
    //
    //image();
    background(0);
    speed = 0;
  //  image(universe, windowWidth/4, windowHeight/45, 800, 800);
    image(universe, width/4, 0, width/2, height);
    fill(255,255,255)
    text("Click anywhere to explore",50,50);
    //image(createPlanet(1),0,0);

  }


    //speed = map(height, 0, width, 0, 100);
}

function drawStars() {

    translate(width / 2, height / 2);
    for (var i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
    translate(-width / 2, -height / 2);
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 2, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}

function mouseClicked() {
  warp = !warp;
  if (stage == 0 ){
  stage = 1;
} else {
    stage = 0;
  }
}
  function keyPressed() {
    console.log(keyCode);
    if (keyCode === LEFT_ARROW) {
      warp = true;
      console.log(warp);
    } else if (keyCode === RIGHT_ARROW) {
      warp = false;
      console.log(warp);
    }
  }




  function createPlanet( index ) {
    // planetImage = createPlanet(random(0,50));
    var tmp;
    var nH,nW;
    nH = height/2;
    nW = width/4;
    tmp = createGraphics(nW,nH);
    //tmp.background(300,0,0);


    if(index == 1) {
    //51 Pegasi B- red background with orange/ yellow
    for( var i = 0 ; i < 500 ; i++) {
      tmp.background(150+random(-50,50),20,0,5);
      tmp.fill(250,0,00);
      tmp.fill(200+random(-50,50),200,50,5);
      tmp.noStroke();
      tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
    }
    for( var i = 0 ; i < 500 ; i++) {
      tmp.fill(200+random(-50,50),200,50,5);
      tmp.noStroke();
      tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 2) {
  //55 Cancri E- black background with yellow
      for ( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(0)
        tmp.fill(250,100,0,5);
        tmp.fill(250+random(-50,50),100,0,8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for ( var i = 0 ; i < 500 ; i++) {
        tmp.fill(250+random(-50,50),180,0,6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 3) {
  // CoRoT 7b- black background with red
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(20,20,20)
        tmp.fill(250,0,0,5);
        tmp.fill(200+random(-50,50),50,50,6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(200+random(-50,50),50,50,6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }

    else if (index == 4) {
  // Europa- blue with reddish on top
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(40,90,200)
        tmp.fill(250,100,0,5);
        tmp.fill(200+random(-50,50),50,50,6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(250,80,10, 6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 5) {
  // G 1214b- white background with red
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(210,210,210)
        tmp.fill(200, 150, 190,7);
        tmp.fill(200+random(-50,50),50,50,6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(250, 130, 80,12);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 6) {
  // Gliese 436b- blue with blue
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(20,20,230)
        tmp.fill(50,50,230,5);
        tmp.fill(200+random(-50,50),50,50,6);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(80,100,240, 10);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 7) {
  // Gliese 581c- earth like world
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(20,130,200)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(230,230,230,13);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 8) {
  // HD188753ab- greyish blue back with white and reddish brown
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(130,130,240)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(250,80,10, 8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(230,230,230,8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 9) {
  // HD 189733 B- blue with blue and white
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(20,20,230)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(80,100,240, 10);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(230,230,230,8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 10) {
  // HD 209458 B- brown backgroudn with red and orange
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(100,35,10)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(250, 130, 80,12);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(200+random(-50,50),200,50,5);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 11) {
  // Kepler 186 f- grayish blue background with orange and off white
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(130,130,240)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(100,75,10,12);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(230,230,230,8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 12) {
  // Kepler 10b- black background with red and yellow
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(40,40,40)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(200+random(-50,50),50,50,8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(200+random(-50,50),150,50,9);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }

    else if (index == 13) {
  // Kepler 16b- black background with red and yellow
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(200,90,40)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(200+random(-50,50),50,50,8);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(200+random(-50,50),150,50,9);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 14) {
  // Kepler 22b- blue and turquoise with clouds
  for( var i = 0 ; i < 500 ; i++) {
  //  tmp.background(150+random(-50,50),20,0,5);
    tmp.background(20,90,220)
    tmp.fill(100,130,15,17);
    tmp.noStroke();
    tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
  }
  for( var i = 0 ; i < 500 ; i++) {
    tmp.fill(30,180,200,17);
    tmp.noStroke();
    tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
  }
  for( var i = 0 ; i < 500 ; i++) {
    tmp.fill(230,230,230,5);
    tmp.noStroke();
    tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 15) {
      // Kepler 438b- greyish blue with brown- green and clouds
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(130,130,240)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(1,58,34,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(230,230,230,5);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
    }


    else if (index == 16) {
      // PSR B162026 B- turquoise
      for( var i = 0 ; i < 500 ; i++) {
      //  tmp.background(150+random(-50,50),20,0,5);
        tmp.background(20,190,220)
        tmp.fill(100,130,15,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(30,180,200,17);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
      }
      for( var i = 0 ; i < 500 ; i++) {
        tmp.fill(230,230,230,5);
        tmp.noStroke();
        tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }


        else if (index == 17) {
          // PSR J17191483 B- dark blue and turquoise
          for( var i = 0 ; i < 500 ; i++) {
          //  tmp.background(150+random(-50,50),20,0,5);
            tmp.background(3,29,71)
            tmp.fill(100,130,15,17);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(30,180,200,9);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }


        else if (index == 18) {
          // Trappist 1f- super grey green with orange neutral on top
          for( var i = 0 ; i < 500 ; i++) {
          //  tmp.background(150+random(-50,50),20,0,5);
            tmp.background(44,54,49)
            tmp.fill(100,130,15,17);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(95,70,55,11);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }


        else if (index == 19) {
          // TrES 2- black and red
          for( var i = 0 ; i < 500 ; i++) {
          //  tmp.background(150+random(-50,50),20,0,5);
            tmp.background(20,20,20)
            tmp.fill(250,0,0,5);
            tmp.fill(200+random(-50,50),50,50,6);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(200+random(-50,50),50,50,6);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }


        else if (index == 20) {
          // TrES 4- light tan, dark red, orange
          for( var i = 0 ; i < 500 ; i++) {
          //  tmp.background(150+random(-50,50),20,0,5);
            tmp.background(128,110,84)
            tmp.fill(100,130,15,17);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(55,15,12,11);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(200+random(-50,50),150,50,7);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }


        else if (index == 21) {
          // wasp 12 b- tan background with pink and red
          for( var i = 0 ; i < 500 ; i++) {
          //  tmp.background(150+random(-50,50),20,0,5);
            tmp.background(128,110,84)
            tmp.fill(100,130,15,17);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(55,15,12,11);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(215,115,120,11);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }


        else if (index == 22) {
          // wasp 17 b- dark turquoise and red and light turquoise
          for( var i = 0 ; i < 500 ; i++) {
          //  tmp.background(150+random(-50,50),20,0,5);
            tmp.background(3,39,71)
            tmp.fill(100,130,15,17);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(95,45,42,11);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
          for( var i = 0 ; i < 500 ; i++) {
            tmp.fill(30,180,200,9);
            tmp.noStroke();
            tmp.ellipse(random(0,nW),random(0,nH),random(0,nW/2),random(0,nH/4));
          }
        }



    var padding = nW/3.5;
    var tmp2 = createImage(nW,nH);
    var mask = createGraphics(nW,nH);
    mask.background(0,0,0,0);
    mask.fill(255);
    mask.ellipse(nW/2,nH/2,nW-padding);
    ;( tmp2 = tmp.get() ).mask(mask);
    //console.log(typeof(tmp));
    //tmp.mask(mask);
    tmp = tmp2.get();
    return tmp.get();
  }




  function shadow(x,y) {
    var width = windowWidth;
    var height = windowHeight;

    fill(0,0,0,70);
    noStroke();
  //  rect(0,0,width/4.5,height);
    beginShape();

    vertex(0,0);
    vertex(width/3.2,0);

    bezierVertex(width/3.2,0,   width/15,height/2,   width/3.2,height);

    vertex(width/3.2, height);
    vertex(0,height);

    endShape();

  }

  function highlight(x,y) {
    var width = windowWidth;
    var height = windowHeight;

    fill(255,255,255,80);
    noStroke();
  //  rect(width/3.5,0,width/5,height);

  beginShape();

  vertex(width/5, 0);
  vertex(width/3.5, 0);

//bezier vertex (this highlight is still in the wrong place)

  vertex(width/3.5, height);
  vertex(width/5, height);

  endShape();

  }
