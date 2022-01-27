var portfolios=[
    {
    id:1,
    category:"health",
    image:"../resources/cite.png",
    title:"CITE",
    link:"https://citeke.com/about.html",
    jid:"cite"

     },
     {
        id:1,
        category:"health",
        image:"../resources/cite.png",
        title:"CITE",
        link:"citeke.com"
         },
    {
    id:1,
    category:"health",
    image:"../resources/cite.png",
    title:"CITE",
    link:"citeke.com"
     },
    {
    id:1,
    category:"health",
    image:"../resources/cite.png",
    title:"CITE",
    link:"citeke.com",
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
              <h3 class="content-title">${portfolio.title}</h3>
              <p class="content-text">This is a short description</p>
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
      alert("Desktop Cite.");
  }


