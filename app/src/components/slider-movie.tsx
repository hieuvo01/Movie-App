import React from 'react'
import { getDiscoverMovies } from '../services/getMovies.service'
import SliderBanner from './slider-banner'

type IProps = {
  id?: string,
}


async function SliderMovie({ id }: IProps) {
  const movies = await getDiscoverMovies(id);
  return (
    <div>
      <SliderBanner movies={movies} />
    </div>
  )
}

export default SliderMovie