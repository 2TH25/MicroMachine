class Plan {


    constructor(){
        this.image = new Image();
        this.image.src = "Circuit.png";
        this.obstacles = [];
        this.vehicules = [];
        this.longueur = 800;
        this.largeur = 800;
    }

    render(context,x,y){
        context.drawImage(this.image,-x,-y,this.image.width*4,this.image.height*4)
    }
    
}