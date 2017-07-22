/* app.js */

//{

    let lastChecked;

    function handleCheck(e) {
        let inBetween = false;
        // check if shift key pressed and checkbox checked
        if (e.shiftKey && this.checked) {
            // loop over every checkbox
            checkboxes.forEach((checkbox) => {
                // "this" is the currently checked box
                if (checkbox === this || checkbox === lastChecked) {
                    // flip inBetween when we encounter lastChecked and the current checkbox
                    inBetween = !inBetween;
                }
                if (inBetween) {
                    checkbox.checked = true;
                }
            });

        }
        // set lastChecked to current box
        lastChecked = this;
    }
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", handleCheck);
    });

//}
