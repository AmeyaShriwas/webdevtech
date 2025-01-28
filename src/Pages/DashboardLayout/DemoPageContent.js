import React from 'react';
import { Box, Typography } from '@mui/material';
import NotesIcon from '@mui/icons-material/Notes';
import PersonIcon from '@mui/icons-material/Person';
import SupportIcon from '@mui/icons-material/Support';
import SectionBox from './SectionBox';

function DemoPageContent() {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 1 }}>Welcome to Webdevtech</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Learn web development, MERN stack, and app development with comprehensive tutorials, one-to-one teaching, and free guidance.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          flexWrap: 'wrap',
        }}
      >
        <SectionBox
          icon={<NotesIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />}
          title="Web Development Notes"
          description="Access detailed notes on front-end, back-end, MERN stack, and more to support your learning journey."
          buttonText="View Notes"
        />
        <SectionBox
          icon={<PersonIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />}
          title="One-to-One Teaching"
          description="Get personalized teaching sessions for front-end, back-end, and app development with expert guidance."
          buttonText="Book Session"
        />
        <SectionBox
          icon={<SupportIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />}
          title="Free Guidance"
          description="Receive free guidance on web development, MERN stack, and app development to help you get started."
          buttonText="Get Guidance"
        />
      </Box>
    </Box>
  );
}

export default DemoPageContent;
