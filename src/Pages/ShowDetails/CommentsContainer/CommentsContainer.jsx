  // import react redux hooks
import { useSelector } from "react-redux";

  // import components
import Comment from "../../../Components/Comment/Comment";
import AddComments from "../AddComments/AddComments";

    // import data from redux
import { res } from "../../../Store/Reducers/CommentSlice";

export default function CommentsContainer() {
    // get comments
  const comments = useSelector(res)
  return (
    <section className="col gap20">
      <AddComments/>

      {comments?.data.map(com => <Comment key={com} comment={com}/>)}
    </section>
  )
}
