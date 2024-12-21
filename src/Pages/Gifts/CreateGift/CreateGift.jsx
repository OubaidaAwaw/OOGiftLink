  // import css files
import './CreateGift.css'

  // import react hooks
import { useState } from 'react'

  // import components
import DragImage from "./DragImage/DragImage.jsx"
import InputContainer from '../../../Components/InputContainer/InputContainer.jsx'
import Combobox from '../../../Components/Combobox/Combobox.jsx'

  // import react redux hooks
import { useDispatch } from 'react-redux'

  // import data from slice
import { CreateNewGift } from '../../../Store/Reducers/GiftsSlice.js'
import { useNavigate } from 'react-router-dom'

export default function CreateGift() {
    // declare navigate
  const navigate = useNavigate()
    // declare dispatch handlers
  const dispatch = useDispatch()
    // gift name variable
  const [name, setName] = useState()
    // gift status variable
  const [status, setStatus] = useState('new')
    // gift catigury
  const [catigury, setCatigury] = useState('utilities')
    // gift Image
  const [imgObj, setImg] = useState(false)
    // on Drop Handler
  function onDropHandler(file) {
    if(file) {
        // set the image in the element
      setImg(file[0])
    }
  }
  const NewHandler = () => {
    if(name && imgObj){
      const newGift = {
        title: name,
        status,
        catigury,
        image: imgObj
      }
      dispatch(CreateNewGift(newGift))
        // clear inputs
      CancelHandler()
        // navigate to home
      navigate('/GiftLink')
    }

  }
  const CancelHandler = () => {
    setImg(false)
    setName("")
  }
  return (
    <section className='createGiftContainer col gap20'>
      <DragImage onDrop={onDropHandler} imgsrc={imgObj}/>
      <InputContainer value={name} onChange={(e) => setName(e.target.value)} type="text" name="GiftName">
        Gift Name
      </InputContainer>
      <div className="row gap20">
        <Combobox options={["home", "car"]} defaultValue={"utilities"} value={catigury} onChange={(e) => setCatigury(e.target.value)} name="status">
          catigury
        </Combobox>
        <Combobox options={["good", "old"]} defaultValue={"new"} value={status} onChange={(e) => setStatus(e.target.value)} name="status">
          status
        </Combobox>
      </div>
      <div className="row gap20">
        <button name="newGift" onClick={NewHandler} type="button" className="button center">Create</button>
        <button name="CancelGift" onClick={CancelHandler} type="button" className="button center">Cancel</button>
      </div>
    </section>
  )
}