// import React, { useContext, useEffect, useState } from 'react';
// import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import styles from './LoginPage.module.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Context  from '../context';

// const LoginPage = () => {
//     const [isActive, setIsActive] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [username, setUsername] = useState('');
//     const [message, setMessage] = useState('');
//     const { setIsLoggedIn } = useContext(Context);
//     const navigate = useNavigate();


//     const handleRegisterClick = () => {
//         // console.log("signup success")
//         setIsActive(true);
//     };

//     const handleLoginClick = () => {
//         setIsActive(false);
//     };


//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Login form submitted");
//         try {
//             const response = await axios.post('http://localhost:3000/auth/login', { email, password });
//             console.log(response)
//             setMessage('Login successful');
//             setIsLoggedIn(true);
//             navigate('/Home');
//             window.location.href = response.data.redirect;
//             // Optionally, handle redirect or save token here
//         } catch (error) {
//             console.log(error);  // Check for errors in the console
//             if (error.response && error.response.status === 401) {
//                 setMessage('Incorrect password or user not found');
//             } else {
//                 setMessage('Login failed. Please try again.');
//             }
//         }
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault();
//         console.log("signup success")
//         try {
//             const response = await axios.post('http://localhost:3000/auth/register', { username, email, password });
//             setMessage('Registration successful');
//             // Optionally, handle redirect or save token here
//         } catch (error) {
//             setMessage('Registration failed. Please try again.');
//         }
//     };
//     return (
//         <div className={styles.loginPage}>
//             <div className={`${styles.container} ${isActive ? styles.containerActive : ''}`} id="container">
//                 <div className={`${styles.formContainer} ${styles.signUp}`}>
//                     <form onSubmit={handleRegisterSubmit}>
//                         <h1>Create Account</h1>
                        
//                         <span>or use your email for registration</span>
//                         <input type="text" placeholder="Username" 
//                                 value={username} onChange={(e)=> setUsername(e.target.value)}/>
//                         <input type="email" placeholder="Email" 
//                                 value={email} onChange={(e)=> setEmail(e.target.value)}/>
//                         <input type="password" placeholder="Password" 
//                                 value={password} onChange={(e)=> setPassword(e.target.value)}/>
//                         <button type='submit'>Sign Up</button>
                        
//                         <div className="social-icons flex space-x-4">
//                             <a href="#" className={`${styles.icon} text-2xl`}><FaGooglePlusG /></a>
//                             <a href="#" className={`${styles.icon} text-2xl`}><FaFacebookF /></a>
//                             <a href="#" className={`${styles.icon} text-2xl`}><FaGithub /></a>
//                             <a href="#" className={`${styles.icon} text-2xl`}><FaLinkedinIn /></a>
//                         </div>
//                     </form>
//                 </div>
//                 <div className={`${styles.formContainer} ${styles.signIn}`}>
//                     <form onSubmit={handleLoginSubmit}>
//                         <h1>Sign In</h1>
//                         <div className="social-icons flex space-x-4">
//                             <a href="#" className={`${styles.icon} text-2xl`} ><FaGooglePlusG /></a>
//                             <a href="#" className={`${styles.icon} text-2xl`} ><FaFacebookF /></a>
//                             <a href="#" className={`${styles.icon} text-2xl`} ><FaGithub /></a>
//                             <a href="#" className={`${styles.icon} text-2xl`} ><FaLinkedinIn /></a>
//                         </div>
//                         <span>or use your email password</span>
//                         <input type="email" placeholder="Email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
//                         <input type="text" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
//                         <a href="#">Forget Your Password?</a>
//                         <button type='submit'>Sign In</button>
//                     </form>
//                 </div>
//                 <div className={styles.toggleContainer}>
//                     <div className={styles.toggle}>
//                         <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
//                             <h1>Welcome Back!</h1>
//                             <p>Enter your personal details to use all of site features</p>
//                             <button  id="login" onClick={handleLoginClick}>Sign In</button>
//                         </div>
//                         <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
//                             <h1>Hello, Friend!</h1>
//                             <p>Register with your personal details to use all of site features</p>
//                             <button  id="register" onClick={handleRegisterClick}>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


import React, { useContext, useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from './LoginPage.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Context from '../context';
import {jwtDecode} from 'jwt-decode'

const LoginPage = () => {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const { setIsLoggedIn } = useContext(Context);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleRegisterClick = () => setIsActive(true);
    const handleLoginClick = () => setIsActive(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Login form submitted");
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            
            localStorage.setItem('token', response.data.token);

            const decodedToken = jwtDecode(response.data.token);
            const customer_id = decodedToken.customer_id;

            localStorage.setItem('customer_id',customer_id)

            console.log(customer_id)
            console.log(decodedToken)

            setMessage('Login successful');
            setIsLoggedIn(true);
            navigate('/home');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                setMessage('Incorrect password or user not found');
            } else {
                setMessage('Login failed. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Registration form submitted");
        try {
            const response = await axios.post('http://localhost:3000/auth/register', { username, email, password });
            setMessage('Registration successful');
            setIsActive(false); // Optionally switch to login view
            // Optionally redirect or log in user after registration
        } catch (error) {
            setMessage('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={`${styles.container} ${isActive ? styles.containerActive : ''}`} id="container">
                <div className={`${styles.formContainer} ${styles.signUp}`}>
                    <form onSubmit={handleRegisterSubmit}>
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Username" 
                                value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder="Email" 
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" 
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' disabled={isLoading}>{isLoading ? 'Signing Up...' : 'Sign Up'}</button>
                        
                        <div className="social-icons flex space-x-4">
                            <a href="#" className={`${styles.icon} text-2xl`}><FaGooglePlusG /></a>
                            <a href="#" className={`${styles.icon} text-2xl`}><FaFacebookF /></a>
                            <a href="#" className={`${styles.icon} text-2xl`}><FaGithub /></a>
                            <a href="#" className={`${styles.icon} text-2xl`}><FaLinkedinIn /></a>
                        </div>
                    </form>
                </div>
                <div className={`${styles.formContainer} ${styles.signIn}`}>
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Sign In</h1>
                        <div className="social-icons flex space-x-4">
                            <a href="#" className={`${styles.icon} text-2xl`}><FaGooglePlusG /></a>
                            <a href="#" className={`${styles.icon} text-2xl`}><FaFacebookF /></a>
                            <a href="#" className={`${styles.icon} text-2xl`}><FaGithub /></a>
                            <a href="#" className={`${styles.icon} text-2xl`}><FaLinkedinIn /></a>
                        </div>
                        <span>or use your email and password</span>
                        <input type="email" placeholder="Email" 
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" 
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        <a href="#">Forget Your Password?</a>
                        <button type='submit' disabled={isLoading}>{isLoading ? 'Signing In...' : 'Sign In'}</button>
                    </form>
                </div>
                <div className={styles.toggleContainer}>
                    <div className={styles.toggle}>
                        <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all site features</p>
                            <button id="login" onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all site features</p>
                            <button id="register" onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            {message && <p>{message}</p>} {/* Display message */}
        </div>
    );
};

export default LoginPage;
