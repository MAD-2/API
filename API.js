let btn = document.getElementById("search");
let city = "Riyadh";
let weatherkey = `d73666192d8d4c66a8526156bc6749e0`;
btn.addEventListener("click", (event) => {
    event.preventDefault()
    city = document.getElementById("Weathe-Input").value;
    console.log(city)
    weatherFun();
})

function weatherFun() {
    fetch(`http://api.weatherbit.io/v2.0/current?key=${weatherkey}&city=${city}&include=minutley&units=s"`).then(res => {
        res.json().then(data=> {
            console.log(data.data[0])
            let temp = data.data[0].app_temp;
            let cityName = data.data[0].city_name;
            let status = data.data[0].weather.description;
            let code = data.data[0].weather.icon
            document.querySelector(".weather").innerHTML = `${temp} <br> ${status} <br> ${cityName} <img src="https://www.weatherbit.io/static/img/icons/${code}.png"/>`;
        })
    })
}
weatherFun()

const newsKey="b7d54ca968d441ec9bd110ffd2d45c95"

let searchWord ="car"
const newUrl=`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=${newsKey}`

let cat = ""
const catApi=`GET https://newsapi.org/v2/top-headlines?apiKey=${newsKey}&category=sports`



document.getElementById("btn btn-outline-success").addEventListener("click",searchNews)

function searchNews(){


fetch(newUrl)
  .then((response) => response.json())
   .then(data =>{
    console.log(data.articles)
    document.getElementById("news").innerHTML=data.articles.map(news=>
      `
      <div class="col-md-6">
          <div class="card">
          <img src="${news.urlToImage}" class="card-img-top"style="height: 200px;" alt="...">            
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
          <div style="height:150px; overflow:hidden;">
              <h2 class="mb-0">${news.title}</h2>
              <strong class="d-inline-block mb-2 text-success">${news.author}</strong>
              <p class="mb-auto">${news.description}</p>
              </div>
              <a href="${news.url}" class="btn btn-primary" target="_blank">more..</a>
            </div>
            <div class="col-auto d-non d-lg-block">

            </div>
          </div>

        </div>
        </div>
        `
        
        ).join('')
  }
    ) ; 
  }  searchNews()
