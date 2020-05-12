import { hot } from 'react-hot-loader/root';
import React from 'react';
import { element } from 'prop-types';
import {
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          backgroundColor: '#f5f5f5',
          fontFamily: "'Microsoft JhengHei', 'ROBOTO', sans-serif",
          lineHeight: 1.6,
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    flex: '1 0 auto',
  },
  title: {
    flexGrow: 1,
  },
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: element.isRequired,
};

function Main() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                GitDemo
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container className={classes.root}>
          <Box height={500} bgcolor="#fafafa" p={2}>
            123
          </Box>
          <Box height={500} bgcolor="#eee">
            456
          </Box>
          <Box height={500} bgcolor="#fafafa">
            789
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default hot(Main);
