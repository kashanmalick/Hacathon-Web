import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, BMSignup, VerifyTab, BMCredential, NewPass,ApprovedData,PendingData,RejectData } from "../pages"


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/verifyTab" element={<VerifyTab />} />
                <Route path="/bmsignup" element={<BMSignup />} />
                <Route path="/bmcredential" element={<BMCredential />} />
                <Route path="/newpass" element={<NewPass />} />
                <Route path="/approved" element={<ApprovedData />} />
                <Route path="/pending" element={<PendingData />} />
                <Route path="/reject" element={<RejectData />} />
            </Routes>
        </Router>

    )
}

export default AppRouter;