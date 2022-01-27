class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount= data.val();

        })
    }
         updateCount() {
             database.ref('/').update({
                 playerCount: count
             })
         }
         update(name){
          var playerIndex = "player"+playerCount;
          database.ref(playerIndex).set({
              name:name
          })
         
         }

    
}