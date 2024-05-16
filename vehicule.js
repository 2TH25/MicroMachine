
class Vehicule {
    

    constructor(x) {
        this.image = new Image()
        if (x == 0){
            this.image.src = "Voiture1.png"
            this.position = {x:6590,y:2412}; // x:1660,y:603  pour la voiture 2
        } else {
            this.image.src = "Voiture2.png"
            this.position = {x:5630,y:1972};
        }
        this.hauteur = this.image.height;
        this.longueur = this.image.width;
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

        context.save();
        context.translate(960,540);
        context.rotate(this.angle * Math.PI/180);
        context.drawImage(this.image,-this.longueur/2,-this.hauteur/2,this.longueur,this.hauteur);
        context.restore();
    }

    tourner(a){
        this.angularSpeed = a * 0.15
    }

    setSpeed(a){
        this.vitesse = a * 0.65
    }

}





