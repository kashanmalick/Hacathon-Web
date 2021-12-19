import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, onClick,style }) {
    return (
        <Button onClick={onClick} fullWidth={true} style={style} variant="contained"><strong>{title}</strong></Button>
    );
}