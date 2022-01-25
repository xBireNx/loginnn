import React, {useState} from 'react';
import LoginForm from './LoginForm'
import ProfileUi from 'react-profile-card';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/react';
import Covid from './Covid';
function Home() {
    const adminUser = {
        email:"admin@admin.com",
        password:"123456"
      }
      const [user, setUser]=useState({name:"", email:""})
      const [error, setError]=useState("")
    
      const Login = details => {
        console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password){
          console.log("Logged in");
          setUser({
            name:details.name,
            email:details.email
          })
        }else{
          // console.log("Details not match");
          setError("Details not match")
        }
      }
    
      const Logout = () => {
        setUser({
          name:"",
          email:""
        })
      }
  return ( 
      <>
      {(user.email !== "") ? (
          <div>
          <CNavbar colorScheme="dark" className="bg-dark">
      <CContainer fluid>
          <CNavbarBrand href="#">{user.name}</CNavbarBrand>
          <button className='bbutton'onClick={Logout}>LOGOUT</button>
      </CContainer>
      </CNavbar>
    </div>
      ):(
        <div></div>
      )}
  <div className="App">
  {(user.email !== "") ? (
      <div>
    <div className='welcome'>
      <center><h2>WELCOME, <span>
       {user.email}</span></h2>
      <ProfileUi 
       imgUrl='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/photo-1511367461989-f85a21fda1_0_1200x768.jpeg?YVCV8xj2CmtZldc_tJAkykymqxE3fxNf&size=770:433' 
       name={user.name}
       value={user.email}
       />
      <button onClick={Logout}>LOGOUT</button>
      
      </center>
      </div>
      <Covid/>  
        </div>
  ) : (
    <LoginForm Login={Login} error={error}/>
  )}
 </div>
 </>
);
}

export default Home;
