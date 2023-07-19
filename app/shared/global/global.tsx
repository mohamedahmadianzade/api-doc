import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import toast from 'react-hot-toast';

export const copyToClip = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Successfully copied to clipboard!');
};
/* eslint-disable */
export const CustomTabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            aria-labelledby={`simple-tab-${index}`}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            role="tabpanel"
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

export interface Props {
    children: React.ReactNode;
}
