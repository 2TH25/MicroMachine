let context = null;

let clic = { x: 0, y: 0 };

let plateau = new Plan();
let vehicule1 = new Vehicule()
let checpoint1 = new Checkpoint();
checkpoint1.numero=1;

let obstacle_ralentissement1 = new ObstacleRalentissement();

let obstacle_rebond1 = new ObstacleRebond();

// const nombrevoitures = 1;
// const Checkpoints=[];
// const vitesserotation=0;
// const nombreObstacleRalentissement=10;
// const nombreObstacleRebondissement=10;
// const deltaT=0;

function init() {
    context = document.getElementById("cvs").getContext("2d");
    context.width = document.getElementById("cvs").width;
    context.height = document.getElementById("cvs").height;

    document.addEventListener("keydown", captureAppuiToucheClavier)
    document.addEventListener("keyup", captureRelacheToucheClavier)

    
    
    

    boucleDeJeu();
}


let Datenew = Date.now()
function boucleDeJeu() {

    update(Date.now()-Datenew);    

    render();
    
    requestAnimationFrame(boucleDeJeu);
    Datenew = Date.now()
}

function update(dt) {
    
    vehicule1.update(dt)

    
}

function render() {

    context.clearRect(0, 0, context.width, context.height);
    context.fillStyle = "red"

    context.drawImage(plateau.image,0,0)

    vehicule1.render(context)

    
}

function captureAppuiToucheClavier(event) {
    // pratique pour connaître les keyCode des touches du clavier :
    //  --> http://www.cambiaresearch.com/articles/15/javascript-key-codes
    if (event.code == "ArrowUp"){
        vehicule1.setSpeed(1)
    }
    if (event.code == "ArrowDown"){
        vehicule1.setSpeed(-1)
    }
    if (event.code == "ArrowLeft"){
        vehicule1.tourner(-1)
    }
    if (event.code == "ArrowRight"){
        vehicule1.tourner(1)

    }

}

function captureRelacheToucheClavier(event) {
    if (event.code == "ArrowUp"){
        vehicule1.setSpeed(0)
    }
    if (event.code == "ArrowDown"){
        vehicule1.setSpeed(0)
    }
    if (event.code == "ArrowLeft"){
        vehicule1.tourner(0)
    }
    if (event.code == "ArrowRight"){
        vehicule1.tourner(0)
    }
}