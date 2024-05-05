let g = new Game();
g.init();

let context = null;

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

    document.addEventListener("click", captureClicSouris)

    boucleDeJeu();
}


let Datenew = Date.now()
function boucleDeJeu() {
    // mise à jour de l'état du jeu
    update(Date.now()-Datenew);    
    // affichage de l'état du jeu
    render();
    // rappel de la boucle de jeu 
    // requestAnimationFrame est une fonction JS servant à pré-calculer le prochain affichage
    //  http://www.html5canvastutorials.com/advanced/html5-canvas-animation-stage/
    
    requestAnimationFrame(boucleDeJeu);
    Datenew = Date.now()
}

function update(dt) {
    
    
}

function render() {
    context.clearRect(0, 0, context.width, context.height);

    context.fillStyle = tabCouleur["red"] ;
    context.fillRect(0,0,50,50);
}