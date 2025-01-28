import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';

function SectionBox({ icon, title, description, buttonText, onClick }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 2,
        width: { xs: '100%', sm: '30%' },
        mb: 4,
      }}
    >
      {icon}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={onClick}>
        {buttonText}
      </Button>
    </Box>
  );
}

SectionBox.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SectionBox;
