
class Vehicule {
    

    constructor() {
        this.position = {x:400,y:400}; 
        this.largeur = 50;
        this.longueur = 50;
        this.angle = 0; //degrée
        this.couleur = 0; //entier
        this.vitesse = 0; //décimal
        this.angularSpead = 0;
        this.nbtour = 0; //entier
        this.checkpoint = 0;//entier

    }

    update(dt){

        this.angle += this.angularSpead * dt;
        this.position.x += Math.cos(this.angle * Math.PI/180) * this.vitesse * dt
        this.position.y += Math.sin(this.angle * Math.PI/180) * this.vitesse * dt

    }

    render(context){

        context.save()
        
        context.fillStyle = "red"
        context.translate(400,400)
        context.rotate(this.angle * Math.PI/180)
        context.fillRect(-this.longueur/2,-this.largeur/2,this.longueur,this.largeur)
        context.restore()
    }

    tourner(a){
        this.angularSpead = a * 0.2
    }

    setSpeed(a){
        this.vitesse = a * 0.5
    }

}





