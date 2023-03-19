import { useParams } from "react-router-dom"

export default function () {
  const {movieId} = useParams()
  return (
    <div>
      {movieId}
    </div>
  )
}