import { Box, Container, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Profile from './profile';
import { green } from '@mui/material/colors';
import PageCover from './page-cover';
import { AnimatePresence } from 'framer-motion';

const Wrapper = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 0,
}));

const AppContainer = styled(Box)(({ theme }) => ({
  height: '80vh',
  maxWidth: '1200px',
  overflow: 'hidden',
  position: 'relative',
  flexGrow: 1,
  // background: "white",
  // gap: '20px',
  // display: 'flex',
  // padding: '0 80px',
  // flexDirection: 'row-reverse',
}));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper maxWidth="xl">
      <AppContainer>
        <AnimatePresence>{children}</AnimatePresence>
        <Profile />
      </AppContainer>
    </Wrapper>
  );
};
export default Layout;
