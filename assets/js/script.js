
document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault();

    fetch(
        '/assets/data/quotes.json'
    ).then(
        res => res.json()
    ).then(
        data => {

            //get card container 
            const cardDiv = document.getElementById('carouselItems');
            data.forEach((word, index) => {
                //setting our first card appearance 

                //For the first quote (when index === 0) we append active to the div class else we remove it 
                const isActive = index === 0? 'active' : '';

                //Setting our cards
                const motivationalCard = `
                <div class="carousel-item ${isActive}">
                  <div class="card mx-auto" style="width: 20rem; height:20rem">
                    <div class="card-body">
                      <h5 class="card-title" style="color:Orange; font-size:1.5rem">"${word.quote}"</h5>
                      <p class="card-text" style="color:black">- ${word.author}</p>
                    </div>
                  </div>
                </div>
                `;

                cardDiv.innerHTML += motivationalCard;
            });
        }
    ).catch(
        error => console.error('error loading quotes', error)
    ); 

    const displayCurrentYear = ()=>{
        const year = new Date().getFullYear();
        const copyrightDiv = document.getElementById('copyrightDiv');
        const yearAndRights = document.createTextNode(` \u00A9 ${year}, An 11pides illustration. All right reserved.`);
        copyrightDiv.appendChild(yearAndRights);
    }
    displayCurrentYear();
});