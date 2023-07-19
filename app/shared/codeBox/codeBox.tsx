import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { copyToClip,CustomTabPanel } from '../global/global';

export default function CodeBox({
    curl,
    python,
    node,
}: {
    curl: string;
    python: string;
    node: string;
}) {
    const [val, setVal] = useState(0);
    /* eslint-disable */
    const handleTab = (e: any, newVal: number) => {
        setVal(newVal);
    };
    return (
        <>
            <Tabs
                indicatorColor="secondary"
                onChange={handleTab}
                textColor="primary"
                value={val}
            >
                <Tab label="cURL" />
                <Tab label="Python" />
                <Tab label="Node.js" />
            </Tabs>
            <CustomTabPanel index={0} value={val}>
                <SyntaxHighlighter
                    language="curl"
                    onClick={() => copyToClip(curl)}
                    style={docco}
                    wrapLongLines={true}
                >
                    {curl}
                </SyntaxHighlighter>
            </CustomTabPanel>
            <CustomTabPanel index={1} value={val}>
                <SyntaxHighlighter
                    className="scroll scroll--itunes"
                    language="python"
                    onClick={() => copyToClip(python)}
                    showLineNumbers={true}
                    style={docco}
                    wrapLongLines={true}
                >
                    {python}
                </SyntaxHighlighter>
            </CustomTabPanel>
            <CustomTabPanel index={2} value={val}>
                <SyntaxHighlighter
                    className="scroll scroll--itunes"
                    language="javascript"
                    onClick={() => copyToClip(node)}
                    showLineNumbers={true}
                    style={docco}
                    wrapLongLines={true}
                >
                    {node}
                </SyntaxHighlighter>
            </CustomTabPanel>
        </>
    );
}
