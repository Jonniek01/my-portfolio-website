var portfolios=[
    {
    id:1,
    category:"health",
    image:"../resources/cite.png",
    title:"CITE",
    link:"https://citeke.com/about.html",
    jid:"cite",
    description:"WaziUp innovations 2021"

     },
    {
    id:2,
    category:"design",
    image:"../resources/sos.png",
    title:"SOSPETER",
    link:"https://sosgitonga.netlify.app/",
        description:"A portfolio Website"

     },
    {
    id:3,
    category:"innovation",
    image:"../resources/selonla.png",
    title:"SELONLA",
    link:"selonla.html",
    description:"My project for Google solution challenge 2022"

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

