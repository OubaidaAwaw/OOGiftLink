  // import css files
import "./Home.css"

  // import react redux hooks
import { useDispatch } from "react-redux"

  // import react hooks
import { useEffect } from "react"

  // import data and slices hooks 
import { GetGifts } from "../../Store/Reducers/GiftsSlice.js"
  // import components
import CardsContainer from "./CardsContainer/CardsContainer"

export default function Home() {
    // declare dispatch
  const dispatch = useDispatch()
    // get the data once
  useEffect(()=>{
    dispatch(GetGifts())
  },[dispatch])
  return (
    <section className="cardsContainer row gap20">
      <CardsContainer/>
    </section>
  )
}
