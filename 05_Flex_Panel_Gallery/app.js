{
    const panels = document.querySelectorAll('.panel');
   
    /* expands and contracts panel */ 
    const toggleOpen = function() {
        this.classList.toggle('open');
    }

    /* hides and puts back top and bottom text */
    const toggleActive = function(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) { // safari uses flex, other browsers use flex-grow
            this.classList.toggle('open-active');
        }
    }

    panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
    panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));

}
