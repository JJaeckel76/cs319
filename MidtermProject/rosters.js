fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
    data.images.slice(0,2).forEach(image => {
        //append image
        const img = new Image();
        img.src = image.url;
        img.id = "myImage";
        document.body.appendChild(img);

        //append team name
        const p = document.createElement('p');
        p.textContent = image.text;
        p.id = "team";
        document.body.appendChild(p);
        
        //list of players
        const playerList = document.createElement('ul');
        playerList.id = "playerList";

        //for each player in the team add name number and year
        image.Players.forEach(player => {
            const playerNum = document.createElement('li');
            playerNum.textContent = player.name + ", " + player.year + ", #" + player.number;
            playerNum.id ="playerInfo";
            playerList.appendChild(playerNum);
            
        });
        document.body.append(playerList);
    });
    

    data.images.slice(2,3).forEach(image => {
      //append image
      const img = new Image();
      img.src = image.url;
      img.id = "myImage";
      document.body.appendChild(img);

      //append label
      const p = document.createElement('p');
      p.textContent = image.text;
      p.id = "cabinet";
      document.body.appendChild(p);
      
      //list of members
      const memberList = document.createElement('ul');

      //for each member add name, position and year
      memberList.id = "playerList";
        image.Cabinet.forEach(member => {
            const memberInfo = document.createElement('li');
            memberInfo.textContent = member.name + ",     " + member.year + ",     " + member.Position;
            memberInfo.id ="playerInfo";
            memberList.appendChild(memberInfo);
        });
        document.body.append(memberList);//append complete list
      });



  });