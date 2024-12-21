  // import css files
import "./Gifts.css"

  // import components
import CreateGift from "./CreateGift/CreateGift"

export default function Gifts() {
  return (<>
    <CreateGift/>
    <section className="myCardsContainer row gap20">
      {/* looping on my own gifts */}
    </section>
  </>)
}
