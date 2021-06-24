import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Link to="/transactions">Transaction Details</Link>
        </>
    )
}

export default HomePage;