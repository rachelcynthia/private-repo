import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const FormPageThree = () => {
    const fields =  [
            {
            required: true,
            id: 'WHETHER_ALL_DETAILS_AVAILABLE',
            label: 'WHETHER ALL DETAILS AVAILABLE -ACCOUNTS',
            value: ''
        },
        {
            required: false,
            id: 'Date_of_return_of_papers',
            label: 'Date of return of papers',
        },
        {
            required: false,
            id: 'Reason_of_returning',
            label: 'Reason of returning',
        },
        {
            required: false,
            id: 'Date_of_re-submission',
            label: 'Date of re-submission',
        },
        {
            required: true,
            id: 'RD_AMOUNT_Accounts',
            label: 'RD AMOUNT -Accounts',
        },
        {
            required: false,
            id: 'Uniforms',
            label: 'Uniforms (Sports,Reg,S&G)',
        },
        {
            required: false,
            id: 'Shoes',
            label: 'Shoes',
        },
        {
            required: false,
            id: 'Books',
            label: 'Books',
        },
        {
            required: false,
            id: 'Excess_Amount_Paid_to_refund',
            label: 'Excess Amount Paid to refund (Term/Tuition/Utility)',
        },
        {
            required: false,
            id: 'Hostel_Fee_paid_to_refund',
            label: 'Hostel Fee paid to refund',
        },
        {
            required: false,
            id: 'Night_Suit_not_collected_to_refund',
            label: 'Night Suit not collected to refund',
        },
        {
            required: false,
            id: 'Donation',
            label: 'Donation',
        },
        {
            required: true,
            id: 'FEE_DUES',
            label: 'FEE DUES',
        },
        {
            required: false,
            id: 'RD_Receipt_missing',
            label: 'IF orig RD Receipt missing Rs 1000/-to be deducted',
        },
        {
            required: false,
            id: 'TC_FEES_UNPAID',
            label: 'TC FEES UNPAID',
        },
        {
            required: false,
            id: 'Hostel_Deduction',
            label: 'Hostel Deduction (Pers A/c)',
        },
        {
            required: true,
            id: 'NET_AMOUNT_Payable',
            label: 'NET AMOUNT Payable',
        },
        {
            required: true,
            id: 'TC_can_be_released',
            label: 'TC -whether TC can be released',
        },
        {
            required: false,
            id: 'RD_PAYMENT_STATUS',
            label: 'RD PAYMENT STATUS',
        },
        {
            required: false,
            id: 'RD Paid_date',
            label: 'RD Paid date',
        },
        {
            required: false,
            id: 'Comments',
            label: 'Comments (by accounts team)',
        },
        {
            required: true,
            id: 'Date_entered_by_admin',
            label: 'Date (on which MS teams id should be deactivated) entered by admin',
        },
        {
            required: true,
            id: 'MS_Teams_ID_Deleted',
            label: 'MS Teams ID Deleted YES/NO',
        },
    
    ];

    const screenWidth = 0.7 * window.screen.width

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
        <FormControl sx={{ m: 1, width: `${screenWidth}px`}}>
            {renderTextFields()}
        </FormControl>
    );

}

export default FormPageThree;