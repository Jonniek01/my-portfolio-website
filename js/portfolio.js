var portfolios=[
  {
    id:1,
    category:"utility",
    image:"../resources/p/wea.jpg",
    title:"WeatherApp PWA",
    link:"https://weatherpapp.netlify.app/",
        description:"Check Weather Forecast for anywhere in the world"

     },
     {
      id:2,
      category:"finance",
      image:"../resources/p/cryp.jpg",
      title:"CyptoTracker App",
      link:"https://cryptopriceapp.netlify.app",
          description:"Cryptocurrency Prices Tracker App"
  
       },
    {
    id:3,
    category:"innovation",
    image:"../resources/p/cite.png",
    title:"CITE",
    link:"https://citeke.com",
    jid:"cite",
    description:"WaziUp innovations 2021"

     },
     {
      id:4,
      category:"innovation",
      image:"../resources/p/selonn.jpeg",
      title:"Selonn",
      link:"https://selonn.netlify.app",
      description:"Google solution challenge 2022 Project"
  
       },
       {
        id:5,
        category:"utility",
        image:"../resources/p/new.jpg",
        title:"New Year CountDown",
        link:"https://newyearc.netlify.app",
        description:"Eternal New Year Countdown"
    
         },
         {
          id:6,
          category:"design",
          image:"../resources/p/me0.jpg",
          title:"JOHN",
          link:"https://jonn.netlify.app",
          description:"My Portfolio"
      
           },
    {
    id:7,
    category:"design",
    image:"../resources/p/sos0.jpg",
    title:"SOSPETER",
    link:"https://sosgitonga.netlify.app/",
        description:"A portfolio Website"

     },
     {
      id:8,
      category:"gaming",
      image:"../resources/p/drivej.jpg",
      title:"DriveJ",
      link:"https://drivej.netlify.app",
      description:"A desktop Car Driving Game"
  
       },
       {
        id:9,
        category:"gaming",
        image:"../resources/p/leeny.webp",
        title:"Lenny Plane",
        link:"https://lenyplane.netlify.app",
        description:"This fighter Planes will take you down!"
    
         }
  

    
]



function renderAll(){
    document.getElementById('portf').innerHTML = portfolios.map(portfolio => 
        `
        <div class="container" >
        <div class="content " >
          <a href="${portfolio.link}" target="_blank" id="${portfolio.jid}">
            <div class="content-overlay"></div>
            <img class="content-image" src="${portfolio.image}">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title cor2" >${portfolio.title}</h3>
              <p class="content-text">${portfolio.description}. <span class="cor2">Click to learn more<span></p>

            </div>

          </a>
        </div>
      </div>

        `

        ).join('')
}

renderAll();


let cite= document.getElementById("cite");


  cite.onclick=()=>{
      if( window.innerWidth <= 800 ){
        alert("citeke.com is a desktop site.");
        console.log("true")


      }
    }

    function renderFiltered(cat){
      document.getElementById('portf').innerHTML = portfolios.filter(portfolio=>portfolio.category==cat).map(portfolio => 
          `
          <div class="container" >
          <div class="content " >
            <a href="${portfolio.link}" target="_blank" id="${portfolio.jid}">
              <div class="content-overlay"></div>
              <img class="content-image" src="${portfolio.image}">
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title cor2" >${portfolio.title}</h3>
                <p class="content-text">${portfolio.description}. <span class="cor2">Click to learn more<span></p>
  
              </div>
  
            </a>
          </div>
        </div>
  
          `
  
          ).join('')
  }

  function renderDesign(){
    let cat="design";
    renderFiltered(cat)
  }
  function renderUtility(){
    let cat="utility";
    renderFiltered(cat)
  }
  function renderFinance(){
    let cat="finance";
    renderFiltered(cat)
  }
  function renderInnovation(){
    let cat="innovation";
    renderFiltered(cat)
  }
  function renderGaming(){
    let cat="gaming";
    renderFiltered(cat)
  }




    
