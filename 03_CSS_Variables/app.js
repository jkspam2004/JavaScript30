{
    const inputs = document.querySelectorAll('.controls input');

    /* update property */
    function handleUpdate() {
        //console.log(this.value);
        //console.log(this.dataset);
        const suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 
    }

    inputs.forEach((input) => {
        input.addEventListener('change', handleUpdate)
    });
    inputs.forEach((input) => {
        input.addEventListener('mousemove', handleUpdate)
    });
}

/*
querySelectorAll returns a NodeList (not an array)
limited methods like:
entries
forEach
item
keys
values

Document.documentElement returns the Element that is the root element of the
document (for example, the <html> element for HTML documents)

https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
*/
