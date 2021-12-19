import React, { useState } from "react";
import PersistentDrawerLeft from "../../components/navbar"
import Container from '@mui/material/Container';
import BasicTextFields from "../../components/Input"
import Logo from '../../Assets/Logo.png'
import BasicButtons from "../../components/Button"
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { sendPasswordResetEmail } from "firebase/auth";
import { Authentication } from "../../config/Firebase";


function BMCredential() {
    const [email, getEmail] = useState("")
    const navigate = useNavigate();

    const ForgotPass = () => {
        return (
            sendPasswordResetEmail(Authentication, email)
                .then((res) => {
                    console.log(res)
                    alert('Please check your email...')
                    navigate("/verifyTab")
                }).catch((e) => {
                    console.log(e)
                    alert(e)
                    getEmail("")
                })
        )
    }


    return (
        <div>
            <PersistentDrawerLeft />
            <div className="imgDiv"><img src={Logo} alt="Logo" className="logoImg" /></div>
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <h1 className="heading" >Branch Manager Credential</h1>
                        <div className="mt-20">
                            <BasicTextFields label="Email" type="email" onChange={(e) => { getEmail(e.target.value) }} value={email} />
                        </div>
                        <div className="mt-20 mb-20">
                            <BasicButtons title="FORGOT PASSWORD" onClick={ForgotPass} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default BMCredential;