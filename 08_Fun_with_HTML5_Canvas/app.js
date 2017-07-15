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
    let mousePos = lastPos;
    let hue = 0;
    let direction = true;

    /* draw the line */
    function draw(e) {
        if (!isDrawing) return;
        console.log(e);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        mousePos = getMousePos(e);

        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);   // start from here
        ctx.lineTo(mousePos.x, mousePos.y); // go to here
        ctx.stroke();                       // draw! 

        lastPos = mousePos;

        changeHue();
        changeLineWidth();
        ctx.closePath();
    }

    function getMousePos(e) {
        return {
            x : e.offsetX,
            y : e.offsetY
        }
    }

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
        lastPos = getMousePos(e);
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);

    // Set up touch events for mobile, etc
    canvas.addEventListener("touchstart", (e) => {
        mousePos = getTouchPos(e);
        let touch = e.touches[0];
        let mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }, false);

    canvas.addEventListener("touchend", (e) => {
        let mouseEvent = new MouseEvent("mouseup", {});
        canvas.dispatchEvent(mouseEvent);
    }, false);

    canvas.addEventListener("touchmove", (e) => {
        let touch = e.touches[0];
        let mouseEvent = new MouseEvent("mousemove", {
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
