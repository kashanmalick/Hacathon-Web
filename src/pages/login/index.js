import React, { useState, useEffect } from "react";
import BasicTextFields from "../../components/Input"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import BasicButtons from "../../components/Button"
import './css/style.css'
import Logo from '../../Assets/Logo.png'
import { Authentication } from "../../config/Firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, getEmail] = useState("")
    const [password, getpassword] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = Authentication.onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                navigate('/verifyTab')
            }
        })
        return unsubscribe
    }, [])

    const SignIn = () => {
        signInWithEmailAndPassword(Authentication, email, password)
            .then((re) => {
                alert("Sign in Sucessfully")
            })
            .catch((err) => {
                alert(err)
                console.log(err)
            })
    }

    return (
        <div>
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <div className="imgDiv"><img src={Logo} alt="Logo" className="logoImg" /></div>
                        <h1 className="heading" >Admin Login</h1>
                        <div className="mt-20">
                            <BasicTextFields label="Email" type="email" onChange={(e) => { getEmail(e.target.value) }} value={email} />
                        </div>
                        <div className="mt-20">
                            <BasicTextFields label="Password" type="password" onChange={(f) => { getpassword(f.target.value) }} value={password} />
                        </div>
                        <div className="mt-20">
                            <BasicButtons title="LOGIN" onClick={SignIn} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>


    )
}

export default Login;