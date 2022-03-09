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
const newUrl=`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsKey}`

fetch(newUrl)
  .then(response => response.json())
  .then(data =>{
    console.log(data.articles,"news",data.articles.length)
    let temp = data.articles.map(articles =>
      `
      <div class="col-md-6 my-2">
          <div class="card">
          <img src="..." class="card-img-top" alt="..." style="height: 200px;">            
          <div class="card-body">
          <div style="height: 150px; overflow: hidden;">
              <h5 class="card-title">${articles.title}</h5>
              <p class="card-text">${articles.author}</p>
              <p class="card-text">${articles.description}.</p>
              <a href="${artical.url}" class="btn btn-primary" target="_blank">more..</a>
            </div>
          </div>
        </div>
      `  
        
        ).join('')
  }
    );