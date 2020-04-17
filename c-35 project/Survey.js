class Survey {
    constructor(){


    }
    getState(){
      var surveyStateRef  = database.ref('surveyState');
      surveyStateRef.on("value",function(data){
         surveyState = data.val();
      })
  
    }
     update(state){
      database.ref('/').update({
        surveyState: state
      });
    }

    async start(){
      if(surveyState === 0){
        user = new User();
        var userCountRef = await database.ref('userCount').once("value");
        if(userCountRef.exists()){
          userCount = userCountRef.val();
          user.getCount();
        }
        form = new Form()
        form.display();
      }
  
     
    }

    end(){
      form.hide();

    }
}