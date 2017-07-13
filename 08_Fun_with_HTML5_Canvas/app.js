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
    ctx.lineWidth = 100;
    //ctx.globalCompositeOperation = "multiply"; // blends to black

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
        if (!isDrawing) return;
        console.log(e);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);           // start from here
        ctx.lineTo(e.offsetX, e.offsetY);   // go to here
        ctx.stroke(); 

        [lastX, lastY] = [e.offsetX, e.offsetY];

        // change the hue
        hue++;
        if (hue >= 360) {
            hue = 0;
        }

        // change the line width
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        } 
        if (direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);

}

/* Notes:
    hsl: hue, saturation, light
    hue = 0 (red). hue goes from 0 to 360
    http://mothereffinghsl.com/
*/
