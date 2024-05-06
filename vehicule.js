
class Vehicule {
    

    constructor() {
        this.position = {x:375,y:375}; 
        this.largeur = 50;
        this.longueur = 50;
        this.angle = 0; //degrée
        this.couleur = 0; //entier
        this.vitesse = 0; //décimal
        this.angularSpeed = 0;
        this.nbtour = 0; //entier
        this.checkpoint = 0;//entier

    }

    update(dt){

        this.angle += this.angularSpeed * dt;
        this.position.x += Math.cos(this.angle * Math.PI/180) * this.vitesse * dt
        this.position.y += Math.sin(this.angle * Math.PI/180) * this.vitesse * dt

    }

    render(context){

        context.save()
        context.fillStyle = "red"
        context.translate(this.position.x,this.position.y)
        context.rotate(this.angle * Math.PI/180)
        context.fillRect(-this.longueur/2,-this.largeur/2,this.longueur,this.largeur)
        context.restore()
    }

    tourner(a){
        this.angularSpeed = a * 0.2
    }

    setSpeed(a){
        this.vitesse = a * 0.5
    }

}





