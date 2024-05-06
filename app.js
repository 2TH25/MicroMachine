let context = null;

let clic = { x: 0, y: 0 };

// const nombrevoitures = 1;
// const Checkpoints=[];
// const vitesserotation=0;
// const nombreObstacleRalentissement=10;
// const nombreObstacleRebondissement=10;
// const deltaT=0;

let image = new Image()
image.src = "ImagePlan.avif"

function init() {
    context = document.getElementById("cvs").getContext("2d");
    context.width = document.getElementById("cvs").width;
    context.height = document.getElementById("cvs").height;

    document.addEventListener("keydown", captureAppuiToucheClavier)
    document.addEventListener("keyup", captureRelacheToucheClavier)

    rectangle = {x: 375, y: 375, rotation: 0.25}
    

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

    context.drawImage(image,0,0)

    context.save()

    context.translate(rectangle.x + 25,rectangle.y + 25)
    context.rotate(Math.PI*rectangle.rotation)
    
    context.fillRect(-25,-25,50,50);

    context.restore()
    
}

function captureAppuiToucheClavier(event) {
    // pratique pour connaître les keyCode des touches du clavier :
    //  --> http://www.cambiaresearch.com/articles/15/javascript-key-codes
    if (event.code == "ArrowUp"){
        
    }
    if (event.code == "ArrowDown"){
        
    }
    if (event.code == "ArrowLeft"){
        
    }
    if (event.code == "ArrowRight"){
        

    }

}

function captureRelacheToucheClavier(event) {
    if (event.code == "ArrowUp"){
        
    }
    if (event.code == "ArrowDown"){
        
    }
    if (event.code == "ArrowLeft"){
        
    }
    if (event.code == "ArrowRight"){
        
    }
}