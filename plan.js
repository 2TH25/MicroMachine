class Plan {


    constructor(){
        this.image = new Image();
        this.image.src = "Circuit2.png";
        this.obstacles = [];
        this.vehicules = [];
        this.longueur = 1920;
        this.largeur = 1080;
    }

    render(context,x,y){
        context.drawImage(this.image,-x,-y,this.image.width*4,this.image.height*4)
    }
    
}