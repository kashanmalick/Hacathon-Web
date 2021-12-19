import React, { useState } from "react";
import PersistentDrawerLeft from "../../components/navbar"
import Container from '@mui/material/Container';
import BasicTextFields from "../../components/Input"
import Logo from '../../Assets/Logo.png'
import BasicButtons from "../../components/Button"
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';


function NewPass() {
    const [pass, getPass] = useState("")
    const [confrimpass, getconfrimpass] = useState("")
    const navigate = useNavigate();


    let log = () => {
        alert("Great..! Your Password Reset Successfull")
        navigate("/verifyTab")

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
                            <BasicTextFields label="New Password" type="email" onChange={(e) => { getPass(e.target.value) }} value={pass} />
                        </div>
                        <div className="mt-20">
                            <BasicTextFields label="Confrim Password" type="email" onChange={(e) => { getconfrimpass(e.target.value) }} value={confrimpass} />
                        </div>
                        <div className="mt-20 mb-20">
                            <BasicButtons title="RESET PASSWORD" onClick={log} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default NewPass;