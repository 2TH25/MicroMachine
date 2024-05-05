let context = null;

let clic = { x: 0, y: 0 };

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
    
    
}

function render() {
    context.clearRect(0, 0, context.width, context.height);
    
    context.fillStyle = "red"
    context.fillRect(0,0,50,50);

    
}