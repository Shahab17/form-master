
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFulForm from './Components/StateFulForm/StateFulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  /* 
    const handleSignUpSubmit = data => {
      console.log('Sign Up data', data)
    }
  
    const handleUpdateProfile = data => {
      console.log('update profile data', data)
    } */

  return (
    <>

      <h2>Form Master</h2>
      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/*   <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSignUpSubmit} >
        <div>
          <h3>Sign Up</h3>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={'Update Profile'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
        <div>
          <h3>Update Profile</h3>
          <p>Always keep your profile updated.</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
