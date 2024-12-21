  // import css files
  import "./../Register/Register.css"

  // import react hooks
import { useState } from "react"
  
  // import components
import InputContainer from "../../Components/InputContainer/InputContainer"

  // import data and h00ks
import { Login as LoginUser} from "../../Store/Reducers/AuthSlice"

  // import hooks from react router
import { useNavigate } from "react-router-dom"

  // imoprt redux hooks
import { useDispatch } from "react-redux"

export default function Login() {
    // declare navigator
  const navigate = useNavigate()
    // declare dispatch
  const dispatch = useDispatch()
    // declare object data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if(!formData.email || !formData.password || !formData.email.includes("@") || !passwordPattern.test(formData.password))
      setValid("please fill all fields!. correctly")
    else{
      dispatch(LoginUser(formData))
      navigate('/GiftLink')
    }
  };

    // declare validation
  const [isValid, setValid] = useState(false)

    // handle Submit
  const handleReset = () => {
    setFormData({
      email: '',
      password: ''
    })
  }
  return (
    <section className="loginContainer center">
      <div className="cardLogin col gap20">

        <InputContainer value={formData.email} onChange={handleChange} type="email" name="email">
          Email
        </InputContainer>

        <InputContainer pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$" value={formData.password} onChange={handleChange} type="password" name="password">
          Password
        </InputContainer>
        
        <p style={{cursor:"default", color: "red"}}>{isValid || ""}</p>

        <div className="row gap20">
          <button onClick={handleSubmit} className="button center" type="submit">Submit</button>
          <button onClick={handleReset} className="button center" type="reset">Cancel</button>
        </div>
        
      </div>
    </section>
  )
}
