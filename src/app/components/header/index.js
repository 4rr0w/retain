import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { ArrowBack } from '@mui/icons-material';
import { Button, Chip, Input } from '@mui/material';
import { CustomTag } from '../customtag';

export default function Header() {

  return (
      <AppBar position="static" color='white'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <ArrowBack />
          </IconButton>
          <Input
            disabled
            defaultValue="Test 3_staging"
            sx={{
                margin: "20px"
            }}
           />
              <CustomTag text="Primary Feed" fill={true} customColor='#1976d2' />
            
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant="contained" sx={{
                background: "#06ae57",
                textTransform: "none",
            }}>
                Publish Feed
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
