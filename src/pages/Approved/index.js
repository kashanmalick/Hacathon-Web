import React from "react";
import PersistentDrawerLeft from "../../components/navbar"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Logo from '../../Assets/Logo.png'
import CollapsibleTable from "../../components/Table"

function ApprovedData() {
    return (
        <div>
            <PersistentDrawerLeft />
            <Container>
                <Grid container justifyContent="center">
                    <h1 className="heading">Approved Requests</h1>
                    <CollapsibleTable />
                </Grid>
            </Container>
        </div>
    )
}

export default ApprovedData;