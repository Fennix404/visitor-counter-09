async function getNumVistors() {
    try {
        // use count api, mucho elegante!
        const response = await fetch("https://countapi.mileshilliard.com/api/v1/hit/raberra-visitor-counter-09");
        const data = await response.json();
        
        // update the text!!
        document.getElementById('count').innerText = data.value;
    } catch (error) {
        console.error("What? Vistor count no worky...", error);
        document.getElementById('count').innerText = "NaN";
    }
}

// get the num of vistors upon page LOAD. get it? LOAD?
window.onload = getNumVistors;
