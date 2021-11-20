var CanvasRandom;
(function (CanvasRandom) {
    window.onload = function () {
        draw();
    };
    //Button to be fixed
    function draw() {
        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < 40; i++) {
            //randomized X and Y positions
            var x = Math.random() * 500;
            var y = Math.random() * 500;
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            ctx.beginPath();
            //actual drawing and amount of circles, randomized
            ctx.arc(Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (80) + 1), 0, 3 * Math.PI);
            ctx.stroke();
            ctx.closePath();
            //color of the circles, randomized
            ctx.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            ctx.fill();
        }
        //End of circle function
    } //End of eventlistener load window
})(CanvasRandom || (CanvasRandom = {})); //End of namespace
//# sourceMappingURL=script.js.map