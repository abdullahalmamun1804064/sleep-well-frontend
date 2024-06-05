
import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Form.css"



const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className=" p-5 mt-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title text-center">Login </h2>
                </div>
                <div className="contact-page__form">
                  <form action="#" className="comment-one__form contact-form-validated" noValidate>
                    <div className="row">

                      <div className="col-xl-12">
                        <div className="comment-form__input-box">
                          <input type="email" placeholder="Email address" name="email" />
                        </div>
                      </div>

                      <div className="col-xl-12">

                        <Box sx={{}}>

                          <div className='pb-5'>
                            <TextField
                              // required
                              sx={{ width: '100%', paddingBottom: "3rem" }}
                              variant="outlined"
                              id="outlined-required"
                              defaultValue="Normal"
                              className='text-field'
                              type="email"
                              label="Email"
                            />
                            <TextField
                              label="With normal TextField"
                              id="outlined-start-adornment"
                              sx={{ m: 1, width: '25ch' }}
                              InputProps={{
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                              }}
                            />
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '1.9rem' }}>
                                Password
                              </InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                }
                                label="Password"
                                sx={{ fontSize: '1.9rem' }}
                              />
                            </FormControl>
                          </div>
                        </Box>


                      </div>
                      <div className="col-xl-12 pb-4 ">
                        <div className="row d-flex justify-content-between ">
                          <div className="col-sm-6 d-flex pb-3 ">
                            <input type="checkbox" id="check" />
                            <label for="check" className='px-3'>Remember me</label>
                          </div>
                          <div className="col-sm-6 d-flex  justify-content-sm-end pb-3">
                            <p><Link to="/forgot-password" className='text-danger'>Forgot Password</Link></p>
                          </div>

                        </div>

                      </div>
                      <div className="col-xl-12 ">

                        <div className="comment-form__btn-box d-flex justify-content-center">
                          <button type="submit" className="thm-btn  comment-form__btn full_button">Login</button>
                        </div>
                      </div>

                      <div className="col-xl-12 pb-5 pt-4 mb-5">
                        <div className="row justify-content-center pb-5 mb-5">
                          <div className="col-xl-6 d-flex justify-content-center">
                            <p>Don’t have an account? <Link to="#" className="text-danger py-5 mb-5 text-center">Register</Link> </p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}

export default Login;
