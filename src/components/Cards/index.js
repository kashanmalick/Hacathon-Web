import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "center",
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 280,

                },
            }}
        >
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />

        </Box>
    );
}
