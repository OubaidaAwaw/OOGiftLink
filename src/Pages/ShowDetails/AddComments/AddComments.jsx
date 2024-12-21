  // import react hooks
import { useState } from 'react'

  // import react router hooks and data
import { useDispatch } from 'react-redux'
import { CreateNewComment } from '../../../Store/Reducers/CommentSlice'

export default function AddComments() {
  const disptch = useDispatch()
    // declare comment
  const [comment,setComment] = useState()
    // Comment Handler
  const gid = window.location.pathname.split('/').pop()
  function CommentHandler(){
    if(!comment)
      window.alert("please fill all fields.!!")
    else{
      const newComment = {
        comment,
        gid
      }
      disptch(CreateNewComment(newComment))
      setComment("")
    }
  }
  return (
    <div className="FirstcommentCard commentCard row gap20">
      <button onClick={CommentHandler} type='button' className='button center'>Add</button>
      <input placeholder='Typing...' value={comment} onChange={(e) => setComment(e.target.value)} type="text" id='comment' name="comment"/>
    </div>
  )
}
