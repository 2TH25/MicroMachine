let context = null;
let clic = { x: 0, y: 0 };

let plateau = new Plan();
plateau.creerVehicule(1)

plateau.creerCheckpoint();

let obstacle_ralentissement1 = new ObstacleRalentissement();

let obstacle_rebond1 = new ObstacleRebond();
obstacle_rebond1.position={x:450,y:400};

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
    
    plateau.vehicules[0].update(dt)

    
}

function render() {

    context.clearRect(0, 0, context.width, context.height);

    plateau.render(context,plateau.vehicules[0].position.x,plateau.vehicules[0].position.y);
    
    for(let i=0;i<plateau.vehicules.length;i++){
        plateau.vehicules[i].render(context);
    }

    
}

function captureAppuiToucheClavier(event) {
    // pratique pour connaître les keyCode des touches du clavier :
    //  --> http://www.cambiaresearch.com/articles/15/javascript-key-codes
    if (event.code == "ArrowUp"){
        plateau.vehicules[0].setSpeed(1)
    }
    if (event.code == "ArrowDown"){
        plateau.vehicules[0].setSpeed(-1)
    }
    if (event.code == "ArrowLeft"){
        plateau.vehicules[0].tourner(-1)
    }
    if (event.code == "ArrowRight"){
        plateau.vehicules[0].tourner(1)

    }

}

function captureRelacheToucheClavier(event) {
    if (event.code == "ArrowUp"){
        plateau.vehicules[0].setSpeed(0)
    }
    if (event.code == "ArrowDown"){
        plateau.vehicules[0].setSpeed(0)
    }
    if (event.code == "ArrowLeft"){
        plateau.vehicules[0].tourner(0)
    }
    if (event.code == "ArrowRight"){
        plateau.vehicules[0].tourner(0)
    }
}