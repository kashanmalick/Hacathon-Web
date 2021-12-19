import React from "react";
import PersistentDrawerLeft from "../../components/navbar"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Logo from '../../Assets/Logo.png';
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


export default function RejectData() {
    return (
        <div>
            <PersistentDrawerLeft />
            <Container>
                <Grid container justifyContent="center">
                    <h1 className="heading">Reject Requests</h1>
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
                <TableCell component="th" scope="row">
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

Row.propTypes = {
    row: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        FName: PropTypes.string.isRequired,
        CNIC: PropTypes.string.isRequired,
        CNum: PropTypes.string.isRequired,
        FMember: PropTypes.string.isRequired,
        MIncom: PropTypes.string.isRequired,
        Ration: PropTypes.string.isRequired,
        DOB: PropTypes.string.isRequired,
    }).isRequired,
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 200, 200, 200, 240, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 2, 2, 2, 24, 4.0, 3.99),
    // createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    // createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

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
                        <TableCell align="right"><strong>Date of Birth</strong></TableCell>
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
