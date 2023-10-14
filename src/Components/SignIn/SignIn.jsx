
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img from "../../assets/instagram-logo.png"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import * as Yup from 'yup'
const style = {

  width: 350,
  border: "1px solid #1D1D1D",
  borderRadius: 5, 
  boxShadow: 24,
  p: 4,
  color: "white",
  flexDirection: "column",
  bgcolor: "#1D1D1D",
  height:"55%",
  marginBottom:"0",
 
};
const style2 = {
    width: 370,
    border: "1px solid #1D1D1D",
    borderRadius: 5, 
    boxShadow: 24,
    marginTop:"20px",
    padding:3,
    color: "white",
    flexDirection: "column",
    bgcolor: "#1D1D1D",
    alignItems:"center",
    justifyContent:"center",
    
  };
  const schema= Yup.object({
   
    email:Yup.string().required("Email is required").email('Invalid email format'),
    password:Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "one uppercase letter,lowercase letter,and #"),
    
  })

export default function MyModal() {
  let formik = useFormik({
    initialValues: {
      
      email: "",
      password: "",
    },validationSchema: schema,
    onSubmit: sendRegisterData,
  });

  const [error, setError] = useState('');

  let navigate=useNavigate()


async function sendRegisterData(values){
let {data}=await axios.post("http://16.170.173.197/users/login",values)
.then((response) =>{
  const token=response.data.token
  localStorage.setItem("token",token);
  localStorage.setItem("myID",response.data.user.id)
  localStorage.setItem("name",response.data.user.userName)
  navigate('/user')
  

}).catch((error) =>{
  console.log(error);
  setError(error.response.data)
})


  if(data.token){
    console.log("welcome")
    setError("")
  }
  else{
    console.log(data);
  }
}
  return (
    <div style={{width:"100%", height:"100vh",display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center" }}>  
        <Box sx={style} style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}} >
        <img src={img} alt="insta" width={"55%"} style={{marginBottom:"25px"}} />
          
          
          
            

         <form onSubmit={formik.handleSubmit}>
          
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              marginBottom: "18px",
              placeholder: "Email",
              border: "1px solid #FFFFFF",
              
              
            }}
            placeholder={"Mobile Number or Email"}
            type="email"
            
            id="email"
            name="email"
            value={formik.values.email}
            onChange={(e) => {
              setError("");
              formik.handleChange(e);
            }}
          />
        
        <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "5px",
              marginBottom: "18px",
             
              border: "1px solid #FFFFFF",
              
              
            }}
            
            id="password"
            name="password"
            type="password"
            placeholder={"Password"}
            value={formik.values.password}
            onChange={(e) => {
              setError("");
              formik.handleChange(e);
            }}
          />
          <p style={{ margin: 0, color: "red" }}>{formik.errors.email}</p>
          <p style={{ margin: 0, color: "red" }}>{formik.errors.password}</p>
             <p style={{ margin: 0, color: "red" }}>{error}</p>
           
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "102%", borderRadius: "10px",paddingLeft:"20px",paddingRight:"20px" ,marginTop:"10px" }}
          >
            LogIn
          </Button>

          </form>
          <div className="or" style={{margin:"20px 0"}}>or</div>
          <Button variant="contained" style={{marginBottom:"25px" ,borderRadius:"10px",width:"100%", margin: "0 auto" }}>
           <FacebookOutlinedIcon style={{marginRight:"7px"}}/>
           Login with Facebook
            </Button>
          <Typography
            sx={{ marginTop:3,textAlign:"center" }}
            variant="h6"
            component="h6"
            fontSize={"14px"}
            width={"78%"}
            color={"rgb(149, 149, 149)"}
          >
           Forgot password?
          </Typography>
        </Box>
                
        
        <Box sx={style2} style={{color:"rgb(149, 149, 149)",display:"flex",marginBottom:"0",justifyContent:"center",alignItems:"center"}}><div>Don’t have an account?<Link to="SignUp" style={{color:"rgb(21, 101, 192)"}}> Sign Up?</Link></div></Box>
         
    </div>
  );
}




