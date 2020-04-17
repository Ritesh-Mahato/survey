class Form{
    constructor(){
        this.input=createInput("Name");
        email=createInput("email");
        this.button=createButton('Submit');
        this.greetings=createElement('h2');
        this.title =  createElement('h2');

    }
    hide(){
        this.greetings.hide();
        this.button.hide();
        this.input.hide();
        email.hide();
        this.title.hide();
    }
    display(){
        this.title.html("survey");
        this.title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        email.position(displayWidth/2-40,displayHeight/2-40);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            email.hide();
            this.button.hide();
            user.name =this.input.value();
            user.email=email.value();
            userCount+=1;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);
            this.greetings.html("hello" +  user.name);
            this.greetings.position(displayWidth/2-70,displayHeight/4);
        });
    }
}