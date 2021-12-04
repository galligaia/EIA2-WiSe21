var CanvasRandom;
(function (CanvasRandom) {
    window.onload = function () {
        draw();
    };
    function draw() {
        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < 40; i++) {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            ctx.beginPath();
            ctx.arc(Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (80) + 1), 0, 3 * Math.PI);
            ctx.stroke();
            ctx.closePath();
            ctx.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            ctx.fill();
        }
    }
})(CanvasRandom || (CanvasRandom = {}));
//# sourceMappingURL=script.js.map