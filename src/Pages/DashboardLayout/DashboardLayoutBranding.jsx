import React from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import NAVIGATION from './Navigation';
import demoTheme from './Theme';
import DemoPageContent from './DemoPageContent';
import { useDemoRouter } from '@toolpad/core/internal';
import Typography from '@mui/material/Typography';


function DashboardLayoutBranding(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'blue' }}></Typography>,
        title: 'Webdevtech',
        homeUrl: '/dashboard',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBranding.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
