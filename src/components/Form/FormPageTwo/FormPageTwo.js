import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const fields = [
    {
        required: false,
        id: 'APPL_FORM',
        label: 'APPL. FORM',
    },
    {
        required: true,
        id: 'RD',
        label: 'RD (ORIGINAL RECEIPT)',
    },
    {
        required: false,
        id: 'RD_MISPLACEMENT_LETTER',
        label: 'RD MISPLACEMENT LETTER',
    },
    {
        required: true,
        id: 'RD_CLAIM_FORM',
        label: 'RD CLAIM FORM',
    },
    {
        required: false,
        id: 'RD_ADJUSTMENT',
        label: 'RD ADJUSTMENT (YES/NO)',
    },
    {
        required: false,
        id: 'RD_AMOUNT',
        label: 'RD AMOUNT',
    },
    {
        required: true,
        id: 'CANCELEED_CHEQUE_PASSBOOK',
        label: 'CANCELEED CHEQUE/ PASSBOOK',
    },
    {
        required: true,
        id: 'PAYEE_NAME',
        label: 'PAYEE NAME',
    },
    {
        required: true,
        id: 'AC_NO',
        label: 'A/C NO',
    },
    {
        required: true,
        id: 'IFSC',
        label: 'IFSC',
    },
    {
        required: true,
        id: 'BANK',
        label: 'BANK',
    },
    {
        required: true,
        id: 'BRANCH',
        label: 'BRANCH',
    },
    {
        required: true,
        id: 'E- MAIL',
        label: 'E- MAIL AS PER CLAIM FORM',
    },
    {
        required: true,
        id: 'PHONE_No',
        label: 'PHONE No. AS PER CLAIM FORM',
    },
    {
        required: false,
        id: 'TC_CURRENT_STATUS',
        label: 'TC CURRENT STATUS',
    },
    {
        required: false,
        id: 'DATE_OF_ISSUE',
        label: 'DATE OF ISSUE ( TC TO PARENT)',
    },
    {
        required: true,
        id: 'DETAILS_ENTERED_BY',
        label: 'DETAILS ENTERED BY(ADMIN NAME)',
    },
    {
        required: true,
        id: 'CHECKED_BY_ADMIN_HEAD',
        label: 'CHECKED BY ADMIN HEAD',
    },
    {
        required: false,
        id: 'Comments',
        label: 'Comments (Academin Team)',
    },
    {
        required: true,
        id: 'DATE_OF_SUBMISSION_TO_ACCOUNTS',
        label: 'DATE OF SUBMISSION TO ACCOUNTS',
    },
    {
        required: true,
        id: 'PERSON_SUBMITTED_TO',
        label: 'PERSON SUBMITTED TO (IN ACCOUNTS DEPT)',
    },
    {
        required: true,
        id: 'Email_ID',
        label: 'Email ID',
    },
]

const FormPageTwo = () => {
    const screenWidth = 0.7 * window.screen.width;

    const setFormValue = (index, event) =>{
        let value = event.target.value
        fields[index].value = value;
    }

    const renderTextFields = () => {
        return fields.map((field, index) => {
            return (
                < TextField
                    required={field.required}
                    id={field.id}
                    label={field.label}
                    margin="normal"
                    onChange= {((event)=> setFormValue(index, event))}
                />
            );
        });
    }

    return (
        <FormControl sx={{ m: 1, width: `${screenWidth}px` }}>
            {renderTextFields()}
        </FormControl>
    );

}

export default FormPageTwo;