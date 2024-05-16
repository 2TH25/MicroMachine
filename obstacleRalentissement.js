class ObstacleRalentissement extends Obstacle {
    constructor(posX,posY,longueur,largeur,orientation,puissanceRalentissement){
        super(posX,posY,longueur,largeur,orientation);
        this.puissanceRalentissement=puissanceRalentissement;
    }

}
