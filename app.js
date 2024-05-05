function init() {
    context = document.getElementById("cvs").getContext("2d");
    context.width = document.getElementById("cvs").width;
    context.height = document.getElementById("cvs").height;
    plan = new Plan()
    document.body.appendChild(plan.image)
}


const nombrevoitures = 1;
const Checkpoints=[];
const vitesserotation=0;
const nombreObstacleRalentissement=10;
const nombreObstacleRebondissement=10;
const deltaT=0;