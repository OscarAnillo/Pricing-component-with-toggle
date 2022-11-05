import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 55,
    height: 33,
    borderRadius: 40,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 25,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(7px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(19px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#6C6BC8' : '#6C6BC8',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 30,
      height: 28,
      borderRadius: 40,
      transition: theme.transitions.create(['width'], {
        duration: 250,
      }),
    },
    '& .MuiSwitch-track': {
      backgroundColor: "#4141C7",
      borderRadius: 16 / 2,
      opacity: 1,
      boxSizing: 'border-box',
    },
  }));