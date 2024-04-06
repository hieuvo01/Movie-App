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
          'Authorization': `Bearer ${process.env.API_KEY}` // Assuming API key usage with Bearer token
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
    const url = new URL(`${process.env.URL_MOVIE}/movies/top_rated`);
    const data = await FetchMovieFromTMDB(url);
    return data;
}

export async function getPopularMovies(){
    //get popular movies
    const url = new URL(`${process.env.URL_MOVIE}/movies/popular`);
    const data = await FetchMovieFromTMDB(url);
    return data;
}

export async function getDiscoverMovies(id?: string, keywords?: string){
    //get discover movies
    const url = new URL(`${process.env.URL_MOVIE}/movies`);
    keywords && url.searchParams.set('with_keywords', keywords);
    id && url.searchParams.set('with_genres', id);
    const data = await FetchMovieFromTMDB(url);
    return data;
}

//search movie
export async function searchMovie(term: string){
    //get popular movies
    const url = new URL(`${process.env.URL_MOVIE}/search/movie`);
    url.searchParams.set('query', term);
    const data = await FetchMovieFromTMDB(url);
    return data;
}