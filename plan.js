class Plan {


    constructor(){
        this.image = new Image();
        this.image.src = "ImagePlan.jpg";
        this.obstacles = [];
        this.vehicules = [];
        this.longueur = 800;
        this.largeur = 800;
    }

    render(context,x,y){
        context.drawImage(plateau.image,-x,-y)
    }
    
}