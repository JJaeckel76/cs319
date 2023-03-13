fetch('index.json')
  .then(response => response.json())
  .then(data => {


    //append image
    const img1 = document.createElement("img");
    img1.src = data.images[0].url;
    img1.id = "myImage";
    document.body.appendChild(img1);

    //append some text
    const p = document.createElement('p');
    p.textContent = "Welcome to the Iowa State Men's Volleyball Club! We are a club that promotes competitive volleyball on campus. We travel to many tournaments accross the midwest and play many teams from other universities. At the end of the season, we travel to a National Championship tournament and play against teams from all over the country."
    p.id ="index";
    document.body.appendChild(p);
    const p2 = document.createElement('p');
    p2.textContent = "As a club we host 3 teams(A, B and C) and a practice squad. A and B teams are our National teams, competing in 3-5 tournaments every semester and and traveling to nationals at the end of the year. C team competes in 1-2 regional tournaments every semester, and practice squad just comes to practice to learn and get better at they sport they love! "
    p2.id ="index";
    document.body.appendChild(p2);
    const p3 = document.createElement('p');
    p3.textContent = "These teams are determined at the beginning of the fall semester with tryouts following 2 weeks of open gyms. As much as we would like to accomodate everyone, we do have to make cuts every year and have a set roster because of limited gym space. If you are invited to be a part of the club, you will be put on the appropriate team and start practice every Tuesday and Thursday night from 6:00pm-8:00pm in the fall and 8:00pm-10:00pm in the spring."
    p3.id ="index";
    document.body.appendChild(p3);


  });;