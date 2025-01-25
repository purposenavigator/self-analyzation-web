import React, { ReactNode } from 'react';
import { Container, Box } from '@mui/material';

interface ResponsiveContentWrapperProps {
  children: ReactNode;
}

/**
 * ResponsiveContentWrapper is a layout component that ensures its children
 * are centered both vertically and horizontally within the viewport.
 * It adjusts the layout direction based on the screen size, displaying
 * children in a column on small screens and in a row on larger screens.
 *
 * @param {ResponsiveContentWrapperProps} props - The props for the component.
 * @param {ReactNode} props.children - The child components to be rendered inside the wrapper.
 * @returns {JSX.Element} The rendered component.
 */
const ResponsiveContentWrapper = ({
  children,
}: ResponsiveContentWrapperProps) => (
  <Container
    maxWidth={false} // Occupy the whole width of the screen
    disableGutters
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Container>
);

export default ResponsiveContentWrapper;
