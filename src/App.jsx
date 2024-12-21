  // import react hooks and components
import  { lazy, Suspense } from "react"

  // import errorboundary to handle errors
import { ErrorBoundary } from "react-error-boundary"

  // import costum func
import WarningLog from "./Facilities/WarningLog.js"
  
  // import react router components and hooks
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider, ScrollRestoration } from 'react-router-dom'

  // import components
import LayoutPage from "./Layouts/LayoutPage/LayoutPage.jsx"
const Error = () => <div>Error</div>

// import component dynamically
const Home = lazy(() => import("./Pages/Home/Home.jsx"))
const Gifts = lazy(() => import("./Pages/Gifts/Gifts.jsx"))
const Account = lazy(() => import("./Pages/Account/Account.jsx"))
const Register = lazy(() => import("./Pages/Register/Register.jsx"))
const Login = lazy(() => import("./Pages/Login/Login.jsx"))
const ShowDetails = lazy(() => import("./Pages/ShowDetails/ShowDetails.jsx"))
const Search = lazy(() => import("./Pages/Search/Search.jsx"))

export default function App() {
  // Create brouser router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/:id" element={<div className="center" style={{width:"100%", height:"100vh"}}>
          <img src={`blob:http://localhost:3000${window.location.pathname}`} alt="" />
        </div>}/>
        <Route path="/GiftLink" errorElement={<Error/>} element={<>
            <ScrollRestoration />
            <LayoutPage/>
          </>
        }>

          <Route index errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Home/>
              </Suspense>
            </ErrorBoundary>
          }/>
          
          <Route path="Search" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Search/>
              </Suspense>
            </ErrorBoundary>
          }/>
          <Route path="Gifts" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Gifts/>
              </Suspense>
            </ErrorBoundary>
          }/>
            {/* protected route */}
          <Route path=":id" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <ShowDetails/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="Account" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Account/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="Register" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Register/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="Login" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Login/>
              </Suspense>
            </ErrorBoundary>
          }/>
          
        </Route>

          {/* Error Route */}
        <Route path="*" element={<Error/>} />
      </Route>
    )
  );
    /* Provide router to the application */
  return <RouterProvider router={router} />
}

WarningLog()