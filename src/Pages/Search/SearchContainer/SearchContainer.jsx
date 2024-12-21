
  // import components
import InputContainer from "../../../Components/InputContainer/InputContainer"
import Combobox from "../../../Components/Combobox/Combobox"

  // import react hooks
import { useState } from 'react'

  // import react redux hooks and data
import { useDispatch } from "react-redux"
import { SearchGift } from "../../../Store/Reducers/SearchSlice"

export default function SearchContainer() {
    // gift name variable
  const [name, setName] = useState()
    // gift status variable
  const [status, setStatus] = useState('new')
    // gift catigury
  const [catigury, setCatigury] = useState('utilities')
    // declare dispatch
  const dispatch = useDispatch()
    // Search Hanlder
  function SearchHanlder(){
    if(name){
      const SearchData = {
        title: name, 
        status,
        catigury
      }
      dispatch(SearchGift(SearchData))
    }
  }
  return (
    <section className='searchContainer col center gap20'>
      <InputContainer value={name} onChange={(e) => setName(e.target.value)} type="text" name="GiftName">
        Gift Name
      </InputContainer>
      <div className="col gap20">
        <Combobox options={["home", "car"]} defaultValue={"utilities"} value={catigury} onChange={(e) => setCatigury(e.target.value)} name="status">
          catigury
        </Combobox>
        <Combobox options={["good", "old"]} defaultValue={"new"} value={status} onChange={(e) => setStatus(e.target.value)} name="status">
          status
        </Combobox>
        <button onClick={SearchHanlder} type='button' className="button center">Search</button>
      </div>
    </section>
  )
}
