import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormPageOne from './FormPageOne/FormPageOne';
import FormPageTwo from './FormPageTwo/FormPageTwo';
import FormPageThree from './FormPageThree/FormPageThree';

const Form = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const TabPanel = ({ children, value, index, ...other }) => {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
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
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Submit" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <FormPageOne />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormPageTwo />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FormPageThree />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FormPageThree />
            </TabPanel>
        </Box>
    );
}

export default Form;