console.log('Hello World');
var images = ["img/nat-1.jpg","img/nat-2.jpg","img/nat-6.jpg","img/nat-7.jpg","img/nat-8.jpg","img/nat-9.jpg"];
var locations = ['The Meadow', 'The hills', 'The mountain', 'Snowy peaks','Sailing','Rock climbing'];

var index = 0;

function showImage() {
    var img = document.getElementById("img");
    img.src = images[index];

    var polaroid = document.getElementById("polaroid");
    polaroid.title = locations[index];


    if (index<images.length-1) {
        
   index = index + 1;
        
    }
}