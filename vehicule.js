
class Vehicule {
    

    constructor() {
        this.image = new Image()
        this.image.src = "Vehicule1.png"
        this.position = {x:5680,y:1872};  // x:1660,y:603  pour la voiture 2
        this.hauteur = this.image.height*4;
        this.longueur = this.image.width*4;
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
        context.translate(960,540)
        context.rotate(this.angle * Math.PI/180)
        context.drawImage(this.image,-this.longueur/2,-this.hauteur/2,this.longueur,this.hauteur)
        context.restore()
    }

    tourner(a){
        this.angularSpeed = a * 0.15
    }

    setSpeed(a){
        this.vitesse = a * 0.65
    }

}





