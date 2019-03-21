//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://api.punkapi.com/v2/beers', true)

request.onload = function (){
// Begin accessing JSON data here

var data = JSON.parse(this.response)


if (request.status >= 200 && request.status < 400){
    data.forEach(beers => {

        // Log each beers name
      console.log(beers.name);
      console.log(beers.description);

      const row = document.getElementById("jos");
      const card = document.createElement("div");
      card.setAttribute("class", "card shadow d-flex align-items-center mt-5");
      const img = document.createElement("img");
      img.setAttribute("class", "card-img-top card title pt-3 pb-3 rounded"); // card-img-top wordt gebruikt door bootstrap om images vanboven te zetten
      img.src = beers.image_url;
      
      const cbody = document.createElement('div');
      cbody.setAttribute('class', 'card-body d-flex justify-content-center flex-column text-center');

       const h3 = document.createElement('h3');
      h3.textContent = beers.name;

      const h4 = document.createElement('h4');
      h4.textContent = beers.tagline;

      const p = document.createElement('p');
      p.textContent = beers.first_brewed; 

      card.appendChild(img);
      jos.appendChild(card);
      card.appendChild(cbody);
      cbody.appendChild(h3);
      cbody.appendChild(h4);
      cbody.appendChild(p);
    })
}
    else {

        console.log('error')
    }
}


// Send request
request.send()


