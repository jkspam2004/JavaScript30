{
    const canvas = document.querySelector("#draw");
    const ctx = canvas.getContext("2d"); // where the drawing is done on canvas

    // set canvas to dimensions to size of window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // style our line
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 50;
    //ctx.globalCompositeOperation = "multiply"; // blends to black

    let isDrawing = false;
    let lastPos = { x: 0, y: 0 };
    let hue = 0;
    let direction = true;

    /* draw the line */
    function draw(e) {
        if (!isDrawing) return;
        console.log(e);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);   // start from here
        ctx.lineTo(e.offsetX, e.offsetY);   // go to here
        ctx.stroke();                       // draw! 

        [lastPos.x, lastPos.y] = [e.offsetX, e.offsetY]; // update last position

        changeHue();
        changeLineWidth();
        ctx.closePath();
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
        if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
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
        [lastPos.x, lastPos.y] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);

    // Set up touch events for mobile, etc
    canvas.addEventListener("touchstart", (e) => {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);

    canvas.addEventListener("touchend", (e) => {
        var mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);

    canvas.addEventListener("touchmove", (e) => {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);


    // Prevent scrolling when touching the canvas
    document.body.addEventListener("touchstart", (e) => {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

    document.body.addEventListener("touchend", (e) => {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

    document.body.addEventListener("touchmove", (e) => {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

}

/* Notes:
    hsl: hue, saturation, light
    hue = 0 (red). hue goes from 0 to 360
    http://mothereffinghsl.com/
*/
