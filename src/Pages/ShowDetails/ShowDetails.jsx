  // import css files
import './ShowDetails.css'

  // import components
import CommentsContainer from './CommentsContainer/CommentsContainer'
import DetailsCard from './DetailsCard/DetailsCard'

export default function ShowDetails() {
  return (<>
      <DetailsCard/>
      <CommentsContainer/>
    </>
  )
}
