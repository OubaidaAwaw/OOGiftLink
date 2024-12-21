  // import react hoooks
import { useEffect } from "react"
  // import data from redux
import { CurrentGift as gift, GetGiftById, GetGiftsById } from "../../../Store/Reducers/GiftsSlice"
import { GetCommentsByGid } from "../../../Store/Reducers/CommentSlice"
  // import react redux hooks
import { useDispatch, useSelector } from "react-redux"

export default function DetailsCard() {
    // declare dispatch
  const dispatch = useDispatch()
    // get the data
  const CurrentGift = useSelector(gift)
    // get the CurrentGift
  useEffect(() => {
    const id = window.location.pathname.split('/').pop()
    if(Object.keys(CurrentGift ?? {}).length === 0)
      dispatch(GetGiftsById(id))
    else
      dispatch(GetGiftById(id))
    dispatch(GetCommentsByGid(id))
  },[dispatch])
  return (
    CurrentGift && Object.keys(CurrentGift).length !== 0?
    <section className='showDetailsContainer row centerCol gap50'>
      <div className="imageContainer">
        <img src={`http://localhost:5000/Images/${CurrentGift.image}`} width={"auto"} height={"auto"} style={{maxWidth:"100%", maxHeight:"300px"}} />
      </div>
      <div className="col gap20">
        <h2>{CurrentGift.title}</h2>
        <p>{CurrentGift.status}</p>
        <p>{CurrentGift.date}</p>
      </div>
    </section>
    :
    <></>
  )
}
