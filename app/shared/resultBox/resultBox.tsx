import { Alert, Box } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/* eslint-disable */
export default function ResultBox({ children }: any) {
    return (
        <Box sx={{
            margin:{
                xs:0,
                md:2
            }
        }}>
            <Alert severity="info">Result</Alert>
            <SyntaxHighlighter
                className="scroll scroll--itunes"
                language="javascript"
                style={docco}
                wrapLongLines={true}
            >
                {children}
            </SyntaxHighlighter>
        </Box>
    );
}
