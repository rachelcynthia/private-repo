import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormPageOne from './FormPageOne/FormPageOne';
import FormPageTwo from './FormPageTwo/FormPageTwo';
import FormPageThree from './FormPageThree/FormPageThree';

const Form = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const TabPanel = ({ children, value, index, ...other }) => {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', position: "fixed", backgroundColor: "white" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered >
                    <Tab label="Page One" {...a11yProps(0)} />
                    <Tab label="Page Two" {...a11yProps(1)} />
                    <Tab label="Page Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <FormPageOne />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormPageTwo />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FormPageThree />
            </TabPanel>
        </Box>
    );
}

export default Form;