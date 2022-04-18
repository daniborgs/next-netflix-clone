import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      // className={`relative cursor-pointer transition duration-200 ease-out md:h-[200px] md:w-[100px] md:hover:scale-105`}
    >
      <Image layout="fill" className="rounded-sm object-cover md:rounded"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        // src={`https://image.tmdb.org/t/p/w500${
          // movie.backdrop_path
          // movie.poster_path
          // movie.backdrop_path || movie.poster_path
        // }`}
      />
    </div>
  )
}

export default Thumbnail
