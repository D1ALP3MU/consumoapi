const URI = 'https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN/top-tracks?market=US'

const TOKEN = 'Bearer BQDTCTk6Sflth_-K2kJrEhXFVPd4vimcJkQ-7HFf_U1V0j4o7eA5lJqz3Ey3jnWMsd4-WNTcT-Lt5zqyBQeHZn5sVUvTANgcya5PMM9-LgzBZytlk579fWnXRx6AyA1_9olORugkSZFjiUejQ3TxlHQUg8okCDMLC0i4v009Jkk4xuDUPPcvt_saZCPJXGWTOS0'

const PETICION = {
    method: "GET",
    headers: {
        Authorization: TOKEN
    }
}

fetch(URI, PETICION)
.then(function(respuesta){
    return (respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){})