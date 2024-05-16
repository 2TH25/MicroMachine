class Plan {


    constructor(){
        this.image = new Image();
        this.image.src = "Circuit.png";
        this.obstacles = [];
        this.vehicules = [];
        this.longueur = this.image.height;
        this.largeur = this.image.width;
    }

    render(context,x,y){
        context.drawImage(this.image,-x,-y,this.image.width,this.image.height)
    }
    
    creerVehicule(x){
        for(let i=0;i<x;i++){
            this.vehicules[i] = new Vehicule(i)
        }
    }

}