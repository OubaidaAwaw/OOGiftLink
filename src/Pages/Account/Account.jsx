  // import css fiels
import "./Account.css"

  // import react hooks
import { useEffect, useState } from "react"

  // import components
import InputContainer from "./../../Components/InputContainer/InputContainer.jsx"

  // import react redux data and hooks
import { useDispatch, useSelector } from "react-redux"
import { GetAccount, res as response, UpdateMyAccount } from "../../Store/Reducers/AccountSlice.js"

export default function Account() {
  const res = useSelector(response)
    // data variables
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  useEffect(() => {
    if (res?.data) {
      setName(res.data.name);
      setEmail(res.data.email);
    }
  }, [res])
    // submit handler
  function SubminHandler(e) {
    e.preventDefault()
    if(email && name)
    {
      const data = {
        email,
        name
      }
      dispatch(UpdateMyAccount(data))
    }
  }
    // declare dispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAccount())
  },[dispatch])

  return (
    <section className="accountContainer col centerCol gap20">

      <InputContainer value={name} onChange={(e) => setName(e.target.value)} type="text" name="name">
        Name
      </InputContainer>
      
      <InputContainer value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email">
        Email
      </InputContainer>

      <button className="button center" name="submitData" onClick={SubminHandler} type="submit">Edit</button>
    </section>
  )
}