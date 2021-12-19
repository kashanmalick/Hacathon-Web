import React, { useEffect, useState } from "react";
import PersistentDrawerLeft from "../../components/navbar"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Logo from '../../Assets/Logo.png';
// import CollapsibleTable from "../../components/Table"
import { collection, docs, getDocs } from "firebase/firestore";
import { db } from "../../config/Firebase";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BasicButtons from '../../components/Button';



var UserName;
let userFName;
let userCNIC;
let userCNum;
let userFMember;
let userMIncom;
let userRation;



export default function PendingData() {
    const [Name, setName] = useState("")
    const [FName, setFName] = useState("")
    const [CNIC, setCNIC] = useState("")
    const [CNum, setCNum] = useState("")
    const [FMember, setFMember] = useState("")
    const [MIncom, setMIncom] = useState("")
    const [Ration, setRation] = useState("")


    useEffect(async () => {
        const userCol = collection(db, 'UsersData');
        const userSnapshot = await getDocs(userCol)
        const userList = userSnapshot.docs.map(doc => doc.data());
        userList.map((v) => {
            UserName = v.Name
            setName(UserName)
            userFName = v.Father_Name
            setFName(userFName)
            userCNIC = v.CNIC
            setCNIC(userCNIC)
            userCNum = v.Contact
            setCNum(userCNum)
            userFMember = v.FMember
            setFMember(userFMember)
            userMIncom = v.MIncome
            setMIncom(userMIncom)
            userRation = v.Ration
            setRation(userRation)

        })
    }, [])

    UserName = Name;
    userFName = FName;
    userCNIC = CNIC;
    userCNum = CNum;
    userFMember = FMember;
    userMIncom = MIncom;
    userRation = Ration;

    const rows = [
        createData(UserName, userFName, userCNIC, userCNum, userFMember, userMIncom, userRation)
    ];

    Row.propTypes = {
        row: PropTypes.shape({
            UserName: PropTypes.string.isRequired,
            UserFName: PropTypes.string.isRequired,
            UserCNIC: PropTypes.string.isRequired,
            UserCNum: PropTypes.string.isRequired,
            UserFMember: PropTypes.string.isRequired,
            UserMIncom: PropTypes.string.isRequired,
            UserRation: PropTypes.string.isRequired,
        }).isRequired,
    };

    function CollapsibleTable() {
        return (
            <TableContainer style={{ width: "150%" }} component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell><strong>Full Name</strong></TableCell>
                            <TableCell align="right"><strong>Father Name</strong></TableCell>
                            <TableCell align="right"><strong>CNIC</strong></TableCell>
                            <TableCell align="right"><strong>Contact Number</strong></TableCell>
                            <TableCell align="right"><strong>No Of Family Member</strong></TableCell>
                            <TableCell align="right"><strong>Monthly Income</strong></TableCell>
                            <TableCell align="right"><strong>Monthly Ration</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    return (
        <div>
            <PersistentDrawerLeft />
            <Container>
                <Grid container justifyContent="center">
                    <h1 className="heading">Pending Requests</h1>
                    <CollapsibleTable />
                </Grid>
            </Container>
        </div>
    )
}


// Creating Table

function createData(Name, FName, CNIC, CNum, FMember, MIncom, Ration, DOB) {
    return {
        Name,
        FName,
        CNIC,
        CNum,
        FMember,
        MIncom,
        Ration,
        DOB,
    };
}



function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th">
                    {row.Name}
                </TableCell>
                <TableCell align="center">{row.FName}</TableCell>
                <TableCell align="center">{row.CNIC}</TableCell>
                <TableCell align="center">{row.CNum}</TableCell>
                <TableCell align="center">{row.FMember}</TableCell>
                <TableCell align="center">{row.MIncom}</TableCell>
                <TableCell align="center">{row.Ration}</TableCell>
                <TableCell align="center">{row.DOB}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, width: "30%" }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Confirmation
                            </Typography>
                            <div style={{ display: "flex" }}>
                                <BasicButtons title="Accept" style={{ backgroundColor: "green" }} />
                                <BasicButtons title="Reject" style={{ marginLeft: 10, backgroundColor: "red" }} />
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}






