  // impor css files
import './LayoutPage.css'
import './../../assets/CSS/Global.css'

  // import components
import Header from '../../Components/Header/Header.jsx'

  // import components form react router
import { Outlet } from 'react-router-dom'

  // import react ho0ks
import { useEffect } from 'react'

  // import redux hooks and data
import { useDispatch } from 'react-redux'
import { RefreshToken } from '../../Store/Reducers/AuthSlice.js'

export default function LayoutPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(RefreshToken())
  },[dispatch])
  return (
    <main className='col gap20'>
      <Header/>
      <Outlet/>
    </main>
  )
}
