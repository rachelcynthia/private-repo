import React from "react";
import Header from "../Header/Header";
import data from '../../data/data.json'
import StickyHeadTable from "../Table/Table";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Dashboard = () => {
    const columns = [{
        Header: 'ROW ID',
        accessor: 'ROW ID'
    },
    {
        Header: 'DATE APPLIED ( BY PARENT)',
        accessor: 'DATE APPLIED ( BY PARENT)'
    },
    {
        Header: "TC applicaiblity",
        accessor: "TC applicaiblity"
    },
    {
        Header: "DATE RECEIVED (BY ACA. ADMIN DEPT) Complete Papers",
        accessor: "DATE RECEIVED (BY ACA. ADMIN DEPT) Complete Papers"
    },
    {
        Header: "MODE OF SUBMISSION (EMAIL /HARD COPY)",
        accessor: "MODE OF SUBMISSION (EMAIL /HARD COPY)"
    },
    {
        Header: "ACADEMIC YEAR",
        accessor: "ACADEMIC YEAR"
    },
    {
        Header: "TYPE OF TC",
        accessor: "TYPE OF TC"
    },
    {
        Header: "EXISTING STREAM",
        accessor: "EXISTING STREAM"
    },
    {
        Header: "INTERNAL TRANSFER",
        accessor: "INTERNAL TRANSFER"
    },
    {
        Header: "Moving to new stream (only in case of internal transfers)",
        accessor: "Moving to new stream (only in case of internal transfers)"
    },
    {
        Header: "Application No (if applicable)",
        accessor: "Application No (if applicable)"
    },
    {
        Header: "MONT ID No (Kg to Class I students)",
        accessor: "MONT ID No (Kg to Class I students)"
    },
    {
        Header: "ID NUMBER",
        accessor: "ID NUMBER"
    },
    {
        Header: "STUDENT NAME",
        accessor: "STUDENT NAME"
    },
    {
        Header: "CLASS",
        accessor: "CLASS"
    },
    {
        Header: "SECTION",
        accessor: "SECTION"
    },
    {
        Header: "HOSTEL",
        accessor: "HOSTEL"
    },
    {
        Header: "PHONE NUMBER",
        accessor: "PHONE NUMBER"
    },
    {
        Header: "FEE ADJUSTMENT LETTER (Applicable for discontinued stud. only)",
        accessor: "FEE ADJUSTMENT LETTER (Applicable for discontinued stud. only)"
    },
    {
        Header: "FEE ADJUSTMENT LETTER (Applicable for discontinued stud. only)",
        accessor: "FEE ADJUSTMENT LETTER (Applicable for discontinued stud. only)"
    },
    {
        Header: "TC FEE (Rs.100/-) PAID (Y/N)",
        accessor: "TC FEE (Rs.100/-) PAID (Y/N)"
    },
    {
        Header: "DONATE",
        accessor: "DONATE"
    },
    {
        Header: "APPL. FORM",
        accessor: "APPL. FORM"
    },
    {
        Header: "RD (ORIGINAL RECEIPT)",
        accessor: "RD (ORIGINAL RECEIPT)"
    },
    {
        Header: "RD MISPLACEMENT LETTER",
        accessor: "RD MISPLACEMENT LETTER"
    },
    {
        Header: "RD CLAIM FORM",
        accessor: "RD CLAIM FORM"
    },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
        // {
        //     Header: "HOSTEL",
        //     accessor: "HOSTEL"
        // },
    ]
    return (
        <>
            <Header />
            <Box
                m={1} //margin
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Button variant="contained" endIcon={<AddCircleIcon />} >
                    Add a new entry
                </Button>
            </Box>
            <StickyHeadTable />
        </>
    );

}

export default Dashboard;