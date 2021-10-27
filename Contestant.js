class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.distance = 0;
      this.button = Submit;
  
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
        distance: this.distance
      });
    }
  
    static getContestantInfo(){  // gets information of all players from the database
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allContestant = data.val();
      })
    }
  }
  