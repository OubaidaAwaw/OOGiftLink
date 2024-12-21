  // import components
import GiftCard from "./../../../Components/GiftCard/GiftCard.jsx"

  // import react redux hooks
import { useSelector } from "react-redux"

  // import data from redux
import { res as response } from "../../../Store/Reducers/GiftsSlice"

export default function CardsContainer() {
    // get res
  const res = useSelector(response)
  return (<>
    {!res?.error && res.data.map(el => (<GiftCard editable={false} gift={el} key={el}/>))}
  </>)
}
