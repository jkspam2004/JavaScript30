/* app.js */
{
    /* set up our canvas */
    var canvas = document.querySelector("#draw");
    var ctx = canvas.getContext("2d"); // where the drawing is done on canvas
    var isDrawing = false;
    var mousePos = { x: 0, y: 0 };
    var lastPos = mousePos;
    var hue = 0;
    var direction = true;

    /* set canvas dimensions to size of window */
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /* style our line */
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 30;
    //ctx.globalCompositeOperation = "multiply"; // blends to black


    /* draw the line */
    function renderCanvas() {
        if (!isDrawing) return;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);   // start from here
        ctx.lineTo(mousePos.x, mousePos.y); // go to here
        ctx.stroke();                       // draw! 

        lastPos = mousePos;

        changeHue();
        changeLineWidth();
        ctx.closePath();
    }

    /* get current mouse position */
    function getMousePos(e) {
        return {
            x : e.offsetX,
            y : e.offsetY
        }
    }

    /* get current touch position */
    function getTouchPos(e) {
        return {
            x : e.touches[0].clientX,
            y : e.touches[0].clientY
        }
    }

    /* change the hue */
    function changeHue() {
        hue++;
        if (hue >= 360) {
            hue = 0;
        }
    }

    /* change the line width */
    function changeLineWidth() {
        if (ctx.lineWidth >= 30 || ctx.lineWidth <= 1) {
            direction = !direction;
        } 
        if (direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }

    /* clear the canvas */
    function clearCanvas() {
        console.log("clear");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /* start drawing from current position with mousedown event */
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        lastPos = getMousePos(e);
    });
    canvas.addEventListener("mousemove", (e) => {
        mousePos = getMousePos(e);
        renderCanvas(); 
    });
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);

    /* set up touch events for mobile, etc */
    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault(); // prevent scrolling when touching the canvas
        isDrawing = true;
        lastPos = getTouchPos(e);
    }, false);
    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        mousePos = getTouchPos(e);
        renderCanvas(); 
    }, false);
    canvas.addEventListener("touchend", (e) => {
        e.preventDefault();
        isDrawing = false;
    }, false);
}

/* Notes:
    hsl: hue, saturation, light
    hue = 0 (red). hue goes from 0 to 360
    http://mothereffinghsl.com/
*/
