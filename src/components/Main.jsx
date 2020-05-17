import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  CssBaseline,
  Container,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  // InputLabel,
  Select,
  MenuItem,
  Box,
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import { blue, orange, indigo } from '@material-ui/core/colors';
import { Formik, FieldArray } from 'formik';
import * as yup from 'yup';
// import clsx from 'clsx';

const theme1 = createMuiTheme({
  typography: {
    fontFamily: ['ROBOTO', 'Microsoft JhengHei', 'sans-serif'].join(','),
  },
  palette: {
    primary: indigo,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          backgroundColor: '#f5f5f5',
          // fontFamily: ['Microsoft JhengHei', 'ROBOTO', 'sans-serif'].join(','),
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

const useStyles = makeStyles((theme) => ({
  root: {
    flex: '1 0 auto',
  },
  appbar: {
    backgroundColor: orange[700],
    [theme.breakpoints.up('sm')]: {
      backgroundColor: blue[700],
    },
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  select: {
    minWidth: 120,
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));

const schema = yup.object().shape({
  name: yup.string().required('請輸入姓名欄位'),
  phone: yup.string().required('請輸入電話欄位'),
  fruit: yup.array().min(1, '至少要選一個'),
  program: yup.string().required('請選擇一項方案'),
});

function Main() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme1}>
        <CssBaseline />
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              GitDemo
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container className={classes.root}>
          <Paper className={classes.paper}>
            <Formik
              initialValues={{ name: '', phone: '', fruit: [], program: '' }}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleSubmit, handleChange, errors, touched, values }) => {
                const isError = (column) => errors[column] && touched[column];
                return (
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <TextField
                      id="name"
                      label="姓名*"
                      placeholder="Input your name..."
                      value={values.name}
                      variant="outlined"
                      className={classes.input}
                      onChange={handleChange}
                      error={isError('name')}
                      helperText={isError('name') ? errors.name : null}
                      fullWidth
                    />
                    <TextField
                      id="phone"
                      label="電話*"
                      placeholder="Input your phone number..."
                      value={values.name}
                      variant="outlined"
                      className={classes.input}
                      onChange={handleChange}
                      error={isError('phone')}
                      helperText={isError('phone') ? errors.phone : null}
                      fullWidth
                    />
                    <FormControl
                      component="fieldset"
                      error={typeof errors.fruit === 'string'}
                    >
                      <FormLabel component="legend">
                        *水果喜好 (至少要選一項)
                      </FormLabel>
                      <FieldArray
                        name="fruit"
                        render={(arrayHelpers) => {
                          const handleCheck = (value) => (e) => {
                            if (e.target.checked) {
                              arrayHelpers.push(value);
                            } else {
                              const idx = arrayHelpers.form.values.fruit.indexOf(
                                value
                              );
                              arrayHelpers.remove(idx);
                            }
                          };
                          const isChecked = (value) =>
                            arrayHelpers.form.values.fruit.includes(value);
                          return (
                            <>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox onChange={handleCheck('apple')} />
                                  }
                                  checked={isChecked('apple')}
                                  label="Apple"
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      onChange={handleCheck('orange')}
                                    />
                                  }
                                  checked={isChecked('orange')}
                                  label="Orange"
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox onChange={handleCheck('grape')} />
                                  }
                                  checked={isChecked('grape')}
                                  label="Grape"
                                />
                              </FormGroup>
                              {typeof arrayHelpers.form.errors.fruit ===
                                'string' && (
                                <FormHelperText>
                                  {arrayHelpers.form.errors.fruit}
                                </FormHelperText>
                              )}
                            </>
                          );
                        }}
                      />
                    </FormControl>
                    <Box>
                      <FormControl
                        variant="outlined"
                        error={isError('program')}
                      >
                        {/*
                      <InputLabel id="program-label">
                        方案
                      </InputLabel>
                      */}
                        <FormLabel>方案選擇</FormLabel>
                        <Select
                          labelId="program-label"
                          id="program"
                          name="program"
                          onChange={handleChange}
                          value={values.program}
                          displayEmpty
                        >
                          <MenuItem value="" disabled>
                            <em>請選擇合適的方案</em>
                          </MenuItem>
                          <MenuItem value="p1">Program1</MenuItem>
                          <MenuItem value="p2">Program2</MenuItem>
                          <MenuItem value="p3">Program3</MenuItem>
                        </Select>
                        {isError('program') && (
                          <FormHelperText>{errors.program}</FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                    <div className={classes.buttonBlock}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        color="primary"
                        disableElevation
                      >
                        Submit
                      </Button>
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                  </form>
                );
              }}
            </Formik>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default hot(Main);
