class Plan {


    constructor(){
        this.image = new Image();
        this.image.src = "Circuit2.png";
        this.obstacles = [];
        this.vehicules = [];
        this.longueur = this.image.height;
        this.largeur = this.image.width;
    }

    render(context,x,y){
        context.drawImage(this.image,-x,-y,this.image.width*4,this.image.height*4)
    }
    
}