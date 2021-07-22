fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
        })
    .then((api) => {
        let texto = "";
                
        //Show API information
        let max = parseFloat(api.ticker.high).toFixed(2);
        let min = parseFloat(api.ticker.low).toFixed(2);
        texto = texto + `
                  
            <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="80" height="60">
                <div class="media-body">
                <h5 class="mt-2"> BTC</h5>
                    <p> Valor máximo: USD ${max}</p>
                    <p>Valor mínimo: USD ${min}</p>
                </div>
            </div>
               
            `;

            document.getElementById("coins").innerHTML = texto;                 
                
    })
    .catch((error) => {
        console.error(error.message);
    });
