
import './App.css'
import Counter from './Components/Counter'

function App() {
  

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='p-5 rounded' style={{backgroundColor:"white" ,width:"40%"}}>
          <h1 className='text-primary m-4 text-center'>Counter Application</h1>
          <Counter/>
        </div>

      </div>
    </>
  )
}

export default App
