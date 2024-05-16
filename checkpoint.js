class Checkpoint extends Obstacle {
    constructor(posX,posY,longueur,largeur,orientation,numero){
        super(posX,posY,longueur,largeur,orientation);
        this.numero=numero;
    }
}