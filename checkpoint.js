class Checkpoint extends Obstacle {

    constructor(n){
        switch (n) {
            case 0:
                super(6900,2500,500,500,null)
                break;
            case 1:
                super(11200,4000,500,500,null)
                break;
            case 2:
                super(7600,3200,400,400,null)
                break;
            case 3:
                super(8500,4800,400,400,null)
                break;
            case 4:
                super(7700,6100,400,400,null)
                break;
            case 5:
                super(6950,5450,400,400,null)
                break;
            case 6:
                super(6150,5500,400,400,null)
                break;
            case 7:
                super(6970,4250,500,500,null)
                break;
            case 8:
                super(5200,4700,500,500,null)
                break;
            case 9:
                super(5250,3400,500,500,null)
                break;
            case 10:
                super(4100,3000,500,500,null)
                break;
        
            default:
                super(0,0,0,0,null)
                break;
        }
        
    }

    render(context,x,y){
        
    }
    
    
}