import { useParams } from "react-router-dom"

export default function () {
  const {actorId, movieId} = useParams()
  return (
    <div>
      actorId: {actorId}, 
      movieId: {movieId}
    </div>
  )
}