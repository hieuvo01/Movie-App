import axios from 'axios';
async function FetchMovieFromTMDB(url: URL, cacheTime?: number){
    url.searchParams.set('include_adult', 'false');
    url.searchParams.set('include_videos', 'false');
    url.searchParams.set('sort_by', 'popularity.desc');
    url.searchParams.set('language', 'en_US');
    url.searchParams.set('page', '1');

    const options: RequestInit = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.API_KEY}`
        },
        next: {
          revalidate: cacheTime || 24 * 60 * 60 // 24 hours
        }
      }
    
    // const urlToUse = url.toString().concat(`?language=en&api_key=${process.env.API_KEY}`)
    const resp = await fetch(url.toString(), options);
    const data = await resp.json();
    return data;
}

export async function getUpcomingMovies(){
    //get upcoming movies
    const url = `${process.env.URL_MOVIE}/movies/upcoming`;
    const data = await axios.get(url).then(res => res.data).catch(err => console.log(err));
    return data;
}

export async function getMostRatedMovies(){
    //get most rated movies
    const url = `${process.env.URL_MOVIE}/movies/top_rated`;
    const data = await axios.get(url).then(res => res.data).catch(err => console.log(err));
    return data;
}

export async function getPopularMovies(){
    //get popular movies
    const url = `${process.env.URL_MOVIE}/movies/popular`;
    const data = await axios.get(url).then(res => res.data).catch(err => console.log(err));
    return data;
}

export async function getDiscoverMovies(id?: string){
    //get discover movies
    const url = new URL(`${process.env.URL_MOVIE}/movies/discover`);
    id && url.searchParams.set('with_genres', id);
    const data = await FetchMovieFromTMDB(url);
    return data;
}



//search movie
export async function searchMovie(term: string){
    //get popular movies
    const url = new URL(`${process.env.URL_MOVIE}/movies/search`);
    url.searchParams.set('search', term);
    const data = await FetchMovieFromTMDB(url);
    return data;
}


//search movie detail
export async function detailMovie(id: string){
    //get popular movies
    const url = `http://localhost:3001/movies/${id}`;
    const data = await axios.get(url).then(res => res.data).catch(err => console.log(err));
    return data;
}