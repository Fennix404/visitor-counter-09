async function getNumVistors() {
    try {
        // use count api, mucho elegante!
        const response = await fetch("https://countapi.mileshilliard.com/api/v1/hit/raberra-visitor-counter-09");
        const data = await response.json();
        
        // update the text!!
        document.getElementById("count").innerHTML = data.value;

        var rand = Math.floor(Math.random() * 100);

        if (rand == 99) {
            document.getElementById("special").innerHTML = "You are one of the lucky 1% of visitors to see this message!";
        }
        else if (rand < 10) {
            document.getElementById("special").innerHTML = "Hello there! It's me, your pal Ghosty! You're one of the lucky ducks to roll the 10% chance to see me!";
            document.getElementById("pic").src = "Ghosty2.gif";
            document.body.style.backgroundColor = "#e1e2e0";
        }


    } catch (error) {
        console.error("What? Vistor count no worky...", error);
        document.getElementById("count").innerHTML = "NaN";
    }
}

// get the num of vistors upon page LOAD. get it? LOAD?
window.onload = getNumVistors;
