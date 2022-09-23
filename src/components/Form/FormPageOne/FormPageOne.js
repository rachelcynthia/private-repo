import * as React from 'react';
import './FormPageOne.css'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const fields = [
    {
        required: true,
        id: 'rowid',
        label: 'ROW ID',
    },
    {
        required: true,
        id: 'DATE_APPLIED',
        label: 'DATE APPLIED ( BY PARENT)',
    },
    {
        required: false,
        id: 'TC_applicaiblity',
        label: 'TC applicaiblity',
    },
    {
        required: true,
        id: 'DATE_RECEIVED',
        label: 'DATE RECEIVED (BY ACA. ADMIN DEPt) Complete Papers',
    },
    {
        required: true,
        id: 'MODE_OF_SUBMISSION',
        label: 'MODE OF SUBMISSION (EMAIL /HARD COPY)',
    },
    {
        required: true,
        id: 'ACADEMIC_YEAR',
        label: 'ACADEMIC YEAR',
    },
    {
        required: true,
        id: 'TYPE_OF_TC',
        label: 'TYPE OF TC',
    },
    {
        required: true,
        id: 'EXISTING_STREAM',
        label: 'EXISTING STREAM',
    },
    {
        required: true,
        id: 'INTERNAL_TRANSFER',
        label: 'INTERNAL TRANSFER',
    },
    {
        required: false,
        id: 'Moving_to_new_stream',
        label: 'Moving to new stream (only in case of internal transfers)',
    },
    {
        required: false,
        id: 'Application No (if applicable)',
        label: 'Application No (if applicable)',
    },
    {
        required: false,
        id: 'MONT_ID_No',
        label: 'MONT ID No (Kg to Class I students)',
    },
    {
        required: true,
        id: 'ID_NUMBER',
        label: 'ID NUMBER',
    },
    {
        required: true,
        id: 'STUDENT_NAME',
        label: 'STUDENT NAME',
    },
    {
        required: true,
        id: 'CLASS',
        label: 'CLASS',
    },
    {
        required: true,
        id: 'SECTION',
        label: 'SECTION',
    },
    {
        required: true,
        id: 'HOSTEL',
        label: 'HOSTEL',
    },
    {
        required: true,
        id: 'PHONE_NUMBER',
        label: 'PHONE NUMBER',
    },
    {
        required: true,
        id: 'FEE_ADJUSTMENT_LETTER',
        label: 'FEE ADJUSTMENT LETTER (Applicable for discontinued stud. only)',
    },
    {
        required: true,
        id: 'TC_FEE_PAID',
        label: 'TC FEE (Rs.100/-) PAID (Y/N)',
    },
    {
        required: true,
        id: 'DONATE',
        label: 'DONATE',
    },
]

const FormPageOne = () => {
    const screenWidth = 0.7 * window.screen.width

    const renderTextFields = () => {
        return fields.map((field) => {
            return (
                < TextField
                    required={field.required}
                    id={field.id}
                    label={field.label}
                    margin="normal"
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

export default FormPageOne;