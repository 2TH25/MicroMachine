class Checkpoint extends Obstacle {

    constructor(n){
        switch (n) {
            case 0:
                super(0,0,50,50,null)
                break;
            case 1:
                super(0,100,50,50,null)
                break;
            case 2:
                super(0,200,50,50,null)
                break;
            case 3:
                super(0,300,50,50,null)
                break;
            case 4:
                super(0,400,50,50,null)
                break;
            case 5:
                super(0,500,50,50,null)
                break;
            case 6:
                super(100,0,50,50,null)
                break;
            case 7:
                super(100,100,50,50,null)
                break;
            case 8:
                super(100,200,50,50,null)
                break;
            case 9:
                super(100,300,50,50,null)
                break;
            case 10:
                super(100,400,50,50,null)
                break;
        
            default:
                super(0,0,0,0,null)
                break;
        }
        
    }

    render(context,x,y){
        context.save()
        context.fillStyle = "red"
        context.fillRect(-x+this.position.x,-y+this.position.y,this.longueur,this.largeur)
        context.restore()
    }

    
    
}