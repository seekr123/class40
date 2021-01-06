class Form{
    constructor(){
        this.title=createElement('h2'); 
        this.input=createInput('name: ');
        this.button=createButton('Play');
        this.greeting=createElement('h3');
        this.reset=createButton('reset');
    }
    display(){
          
        this.title.html('Car Racing Game');
        this.title.position(displayWidth/2-50,0);        
        this.input.position(displayWidth/2-40,displayHeight/2-80);        
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,40);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('hello  '+ player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            Player.updateCarsAtEnd(0);
        })
        
     }



     hide(){
         this.input.hide();
         this.button.hide();
         this.greeting.hide();
     }
}