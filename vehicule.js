
class Vehicule {
    

    constructor() {
        this.image = new Image()
        this.image.src = "Voiture1.png"
        this.position = {x:400,y:400}; 
        this.hauteur = this.image.height*0.2;
        this.longueur = this.image.width*0.2;
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
        context.translate(400,400)
        context.rotate(this.angle * Math.PI/180)
        context.drawImage(this.image,-this.longueur/2,-this.hauteur/2,this.longueur,this.hauteur)
        context.restore()
    }

    tourner(a){
        this.angularSpeed = a * 0.15
    }

    setSpeed(a){
        this.vitesse = a * 0.5
    }

}





