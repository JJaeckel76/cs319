fetch('schedule.json')
  .then(response => response.json())
  .then(data => {
    
    data.images.forEach(image => {
        //append image
        const img = new Image();
        img.src = image.url;
        img.id = "myImage";
        document.body.appendChild(img);

        //append each element from the json
        const title = document.createElement('p');
        title.textContent = "Tournament: " + image.title;
        title.id ="schedule";
        document.body.appendChild(title);

        const date = document.createElement('p');
        date.textContent = "Date: " + image.date;
        date.id ="schedule";
        document.body.appendChild(date);
        
        const location = document.createElement('p');
        location.textContent = "Location: " + image.location;
        location.id ="schedule";
        document.body.appendChild(location);

        const teams = document.createElement('p');
        teams.textContent = "Participating Teams: " + image.ParticipatingTeams;
        teams.id ="schedule";
        document.body.appendChild(teams);
        
   });
});