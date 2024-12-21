  // import css files
import './GiftCard.css'

  // import react router components
import { Link } from 'react-router-dom'

export default function GiftCard(props) {
  return(
    <div className='col giftCardContainer gap10'>
      <div className="centerRow col">
        <img style={{maxWidth:"100%", maxHeight:"300px"}} width={"auto"} height={"auto"} src={`http://localhost:5000/Images/${props.gift.image}`}/>
      </div>
      <h2>{props.gift.title}</h2>
      <p>{props.gift.status}</p>
      <p>{props.gift.date}</p>
      <div className="center">
        <Link to={`/GiftLink/${props.gift._id}`} className='button center'>view this gift</Link>
      </div>
    </div>
  )
}
