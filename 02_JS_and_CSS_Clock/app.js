{
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const offset = 90; // add back offset that was set in .hand 

    /* time set at interval 1 second */
    const setDate = function() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = toDegrees(seconds, offset);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = toDegrees(minutes, offset);
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = toDegrees(hours, offset, true);
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(`sec: ${seconds}, secDeg: ${secondsDegrees}, min: ${minutes}, minDeg: ${minutesDegrees}`);
    };

    const toDegrees = function(unit, offset, hour) {
        let divisor = hour ? 12 : 60; 
        return ((unit / divisor) * 360) + offset;
    };

    setInterval(setDate, 1000);
}
