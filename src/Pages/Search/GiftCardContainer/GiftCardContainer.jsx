  // import react redux hooks
import { useSelector } from 'react-redux'
  // import components
import GiftCard from './../../../Components/GiftCard/GiftCard'
  // import data from redux
import { res as response } from '../../../Store/Reducers/SearchSlice'

export default function GiftCardContainer() {
    // declare the response data
  const res = useSelector(response)
  return (
    <section className='giftSearchCardContainer row gap20'>
      {res?.data?
        res.data.map(el => <GiftCard key={el} gift={el}/>)
      :<></>}
    </section>
  )
}
