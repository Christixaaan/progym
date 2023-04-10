var images  = [{img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Bodiam-castle-10My8-1197.jpg"},
               {img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Balmoral_Castle.jpg"},
               {img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Hunedoara_castle.jpg"},
               {img: "https://i.redd.it/wpn9t2egd7cy.png"},
               {img: "https://vinenvacances.com/wp-content/uploads/2018/12/Carcasonne-round-1024x768.jpg"}];
var element = document.getElementById("containersl");
function next(direction){
  var index= element.dataset.index;
  if(direction=="rightsl"){index++;}else{index--}
  if(index>images.length-1){index=0;}
  if(index<0){index=images.length-1;}
  element.dataset.index=index;
  element.style.backgroundImage  ="url('"+ images[index].img +"')";
};

/*
var images = [
  'https://displate.com/displates/43317/zoom/2015-04-29/0cc61b1b3a3eb4ef02d0491bb72c28bc.jpg',
  'https://displate.com/displates/539809/zoom/2019-04-29/2326d9f7bc611338a0e79fa09730199e_498b7e21d0b811b1369714df732a8d73.jpg',
  'https://displate.com/displates/967617/zoom/2019-11-21/40fdf5268cc41b142077efea01c523a4_301a100f100e27241a8c1ba55ecc0e7e.jpg',
  'https://displate.com/displates/967630/zoom/2019-11-21/b5458b0db492a70e2b81a191485ff080_37057858e11b2ff1ddcd96c4f3168aca.jpg',
  'https://displate.com/displates/967720/zoom/2019-11-21/58fb80052878fc9de21019cbcf34b563_0a23437ca88fa97b74079169c7d71e91.jpg',
  'https://displate.com/displates/504203/zoom/2019-04-04/a77f3bcb62d736585c04781d84d2c94e_bd37be6ce2b0d71bade81a593aeb650f.jpg'
];

var num=0;

function next()
{
  var slider = document.getElementById('slider-img');
  num++;
  if(num >= images.length)
    {
      num=0;
    }
  slider.src = images[num];
}

function previous()
{
  var slider = document.getElementById('slider-img');
  num--;
  if(num < 0)
    {
      num = images.length-1;
    }
  slider.src = images[num];
}

*/
