class Obstacle {

    constructor(posX,posY,longueur,largeur,orientation,source){
        this.image=new Image()
        this.image.src = source
        this.position={x:posX, y: posY};
        this.longueur=longueur;
        this.largeur=largeur;
        this.orientation=orientation;
    }

    constructor(posX,posY,longueur,largeur,orientation){

        this.position={x:posX, y: posY};
        this.longueur=longueur;
        this.largeur=largeur;
        this.orientation=orientation;

    }







  
    
   
}





