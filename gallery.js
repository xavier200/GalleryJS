var chico ={}
  {
    description:"Hulas",
    picture: "https://s-media-cache-ak0.pinimg.com/564x/60/6b/d4/606bd4510123bde9ae79453f2c528bc5.jpg",
    from:"pinterest.com"
  },
  {
    description:"MOMS",
    picture: "https://www.csuchico.edu/chicoexperience/_assets/images/moms.jpg",
    from:"csuchico.edu"
  },
  {
    description:"Madison bear",
    picture: "https://pbs.twimg.com/profile_images/197076615/bear.jpg",
    from:"twitter.com"
  },
  {
    description:"IN-N-OUT",
    picture: "https://s3-media1.fl.yelpcdn.com/bphoto/YaZEFzUDt00-sGNTbrbOBw/o.jpg",
    from:"yelp.com"
  },
  {
    description:"Burgers and Brew",
    picture: "https://static.wixstatic.com/media/ebd312_cc84e5720763419aab5d39f21ad39f0b~mv2.png",
    from:"burgersandbrew.com"
  };

var current = chico
function shuffleGallery()
{
do{
  var RandomNumbers = Math.floor(Math.random() * chico.length);
  console.log(RandomNumbers);

} while(current==RandomNumbers);



}
