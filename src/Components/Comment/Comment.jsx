  // import css files
import './Comment.css'

export default function Comment(props) {
  return (
    <div className='commentCard center'>
      <p>{props.comment.comment}</p>
    </div>
  )
}
