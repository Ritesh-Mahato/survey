class User{
     constructor(){
         this.index=null;
         this.name = null;
         this.email=null;

     }


     getCount(){
         var userCountRef = database.ref('userCount');
         userCountRef.on("value",(data)=>{
             userCount=data.val();

         })
     }
     updateCount(count){
         database.ref('/').update({
             userCount:count
         });
     }
     update(){
         var userIndex = "users/user" + this.index;
         database.ref(userIndex).set({
             name:this.name,
             email:this.email
         });
     }
     static getUserInfo(){
         var userInfoRef=database.ref('Users');
         userInfoRef.on("value",(data)=>{
             Users=data.val();
         })
     }

}


