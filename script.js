let movies = [
    {
        name: 'Justice League',
        poster: 'https://th.bing.com/th/id/OIP.c3VjSn9aWHYI-JidQavqcgHaK-?w=203&h=301&c=7&r=0&o=5&pid=1.7',
        rating: '3.7',
        author: 'Henry Cavil, Ben Afflek, Gal Gadot, Amy Adams, Ray Fisher'
    },
    {
        name: 'Avengers Endgame',
        poster: 'https://th.bing.com/th/id/OIP.O5ar9IgC_70RgrtXxkn71AHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7',
        rating: '4.7',
        author:'Robert Downey Jr,Chris Evans, Mark Ruffalo,Chris Hemsworth'
    },
    {
        name: 'Expendables 2',
        poster: 'https://th.bing.com/th/id/OIP.HsBRitTHTPgXwMPyA_hvtgHaK-?w=203&h=301&c=7&r=0&o=5&pid=1.7',
        rating: '4.7',
        author: 'Sylvester Stallone,Jason Statham,Jet Li,Dolph Lundgren'
    },
    {
        name: 'Monster House',
        poster: 'https://th.bing.com/th/id/OIP.1umjRUVLTbPQCPVU_q1HPgHaK-?w=203&h=301&c=7&r=0&o=5&pid=1.7',
        rating: '2.7',
        author: 'Mitchel Musso,Sam Lerner,Spencer Locke,Steve Buscemi'
    },
    {
        name: 'Looper',
        poster: 'https://th.bing.com/th/id/OIP.E2EPleUy3g_c_Zm59bHlFQHaK-?w=203&h=301&c=7&r=0&o=5&pid=1.7',
        rating: '4.5',
        author: 'Joseph Gordon, Emily Blunt, Bruce Willis, Pul Dano'

    },
    {
        name: 'Captain America',
        poster: 'https://th.bing.com/th/id/OIP.Tn_hQwIbjWpRPlz7lijolQHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7',
        rating: '3.5',
        author: 'Chris Evans,Hayley Atwell, Hayley Atwell,Hugo Weaving '
    },
    {
        name: 'John Wick',
        poster: 'https://th.bing.com/th/id/OIP.ZDtrukmvFU3gW-YZ1Yw5lAHaJ4?w=203&h=271&c=7&r=0&o=5&pid=1.7',
        rating: '1.5',
        author: 'Keanu Reeves, Michael Nyqvist,Alfie Allen, William Dafoe'
    },
    {
        name: 'Transforms The Last Knight ',
        poster: 'https://th.bing.com/th/id/OIP.dkrozTTIiB6WwvhGBWkM9gHaK-?w=203&h=300&c=7&r=0&o=5&pid=1.7',
        rating: '10',
        author:'Mark Wahlberg, Mark Wahlberg, Josh Duhamel, Laura Haddock'
    }

]




function searchMovie(){
   let movieName =  document.getElementById("search").value;
   
   if(movieName !=="")
        {
        
            let result = movies.filter(function(movie){
                    return movie.name.toUpperCase().includes(movieName.toUpperCase()) 
                })


    if(result.length==0){
        window.alert("Sorry, No movies were found");
    }
                displayMovies(result);
        }
        else{
            displayMovies(movies);
        }
}
function displayMovies(data){
    document.getElementById("movies").innerHTML ="";

    let htmlString =``;
    

    for(let i=0; i<data.length; i++){

        
        htmlString =htmlString+`
        <div class ="movie">
        <div class="overlay">
            <div class="video"> 
            </div> 

            <div class="details">

                <h1>${data[i].name}</h1>
                <h2>IMDB: ${data[i].rating}</h2>
                <p class="para">Cast: ${data[i].author}</p>

            </div>
        </div>
        <img class="poster" src="${data[i].poster}" alt="movie poster">
    </div> 
        `
    }
    
    document.getElementById("movies").innerHTML = htmlString;

}
displayMovies(movies);
