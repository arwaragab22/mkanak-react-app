

import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    let navigate = useNavigate();
    const { logout, isAuthenticated} = useAuth0();

    return (
        <div className="login">
            <div className="wrapper">

                <h1 className="loginTitle">sign up</h1>
              
              
              
         
                    <Formik
                        initialValues={{username:'' ,email: '', password: '',confirmpassword:'' ,birthday:''}}
                        validate={values => {
                            const errors = {};
                            if (!values.username) {
                                errors.username = 'Required name'
                            } else if (values.username.length < 2) {
                                errors.username = 'Must be 5 characters or more'
                            }
                            if (!values.email) {
                                errors.email = 'Required';
                            }
                             if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.password) {
                                errors.password = 'please enter password'
                            } else if (values.password.length < 2) {
                                errors.password= 'Must be 8 characters or more'
                            }
                            if (!values.confirmpassword) {
                                errors.confirmpassword = 'please confirm password'
                            } else if (values.confirmpassword!==values.password) {
                                errors.confirmpassword = 'passwod not identical'
                            }
                            
                            
                          
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              
                                setSubmitting(false);

                                navigate('/', { replace: true, email: values.email });
                               console.log(isAuthenticated)
                            }, 400);
                         
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                        <form onSubmit={handleSubmit}>
                            <label for="name">username</label>
                            <br/>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                value={values.username}
                                placeholder={errors.username && touched.username && errors.username}
                            />
                          
                            
                            <br/>
                            <label for="email">email</label><br />
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder={errors.email && touched.email && errors.email}
                            />
                            
                            <br/>
                            <label for="birthday">birthday</label><br />
                            <input
                                type="date"
                                name="birthday"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.birthday}

                                placeholder="2010-07-22"
                                min="2018-01-01" max="2018-12-31"
                            />
                            <br />
                            <label for="password">password</label><br />
                            {errors.birthday && touched.birthday && errors.birthday}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                value={values.password}
                                placeholder={errors.password && touched.password && errors.password}
                            />
                            
<br/>
                            <label for="password"> confirm password</label><br />
                            <input
                                type="password"
                                name="confirmpassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmpassword}
                                placeholder={errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
                            />
                            <br />
                         
                                
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                      
                            
                            
                          
                        
                            </form>
                        )}
                    </Formik>
                </div>
              

                    
              
            
        </div>
    );
};

export default Login;