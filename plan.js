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

    creerCheckpoint(){
        let ch1 = new Checkpoint(5830,1872,100,100,0,0);
        this.obstacles = this.obstacles + [ch1]
        let ch2 = new Checkpoint(5930,1872,100,100,0,1);
        this.obstacles = this.obstacles + [ch2]
        let ch3 = new Checkpoint(6030,1872,100,100,0,2);
        this.obstacles = this.obstacles + [ch3]
        let ch4 = new Checkpoint(5830,1972,100,100,0,3);
        this.obstacles = this.obstacles + [ch4]
        let ch5 = new Checkpoint(5830,1372,100,100,0,4);
        this.obstacles = this.obstacles + [ch5]
        let ch6 = new Checkpoint(5830,1472,100,100,0,5);
        this.obstacles = this.obstacles + [ch6]
    }

}