import { useState } from 'react';
import api from '../utils/axiosInstance'; // Import your axios instance here

export default function Authentication() {
  const [step, setStep] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Handle switching back to the SignIn step
  const handleBackToLogin = () => setStep('signin');

  // Handle SignIn API request
  const handleSignIn = async () => {
    try {
      const response = await api.post('/auth/signin', { email, password });
      localStorage.setItem('accessToken', response.data.accessToken); // Store token in localStorage
      setStep('thankyou');
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  // Handle SignUp API request
  const handleSignUp = async () => {
    try {
      await api.post('/auth/signup', { name, email, password });
      setStep('thankyou');
    } catch (error) {
      console.error("Error during sign-up:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  // Handle Forgot Password API request
  const handleForgotPassword = async () => {
    try {
      await api.post('/auth/forgot-password', { email });
      setStep('thankyou');
    } catch (error) {
      console.error("Error during password reset:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  // Render the form based on the current step
  const renderStep = () => {
    switch (step) {
      case 'signin':
        return (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-center mb-6">Sign in to continue to RoyalX</p>
            <input
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between text-sm text-gray-300 mb-4">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <span className="link" onClick={() => setStep('forgot')}>Forgot password?</span>
            </div>
            <button className="auth-button" onClick={handleSignIn}>Sign In</button>
            <p className="mt-6 text-sm text-center text-gray-400">
              Don't have an account?{' '}
              <span className="link font-semibold" onClick={() => setStep('signup')}>
                Sign Up
              </span>
            </p>
          </>
        );

      case 'signup':
        return (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
            <p className="text-gray-400 text-center mb-6">Get your free RoyalX account now</p>
            <input
              className="auth-input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-sm text-gray-300 mb-4">
              <label>
                <input type="checkbox" className="mr-2" />
                I agree to the <span className="link">Terms & Conditions</span>
              </label>
            </div>
            <button className="auth-button" onClick={handleSignUp}>Register</button>
            <p className="mt-6 text-sm text-center text-gray-400">
              Already have an account?{' '}
              <span className="link font-semibold" onClick={handleBackToLogin}>
                Sign In
              </span>
            </p>
          </>
        );

      case 'forgot':
        return (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">Forgot Password?</h2>
            <p className="text-gray-400 text-center mb-6">
              Enter your email and we’ll send you instructions to reset your password.
            </p>
            <input
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="auth-button" onClick={handleForgotPassword}>Send Reset Link</button>
            <p className="mt-6 text-sm text-center text-gray-400">
              Back to{' '}
              <span className="link font-semibold" onClick={handleBackToLogin}>
                Sign In
              </span>
            </p>
          </>
        );

      case 'thankyou':
        return (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">Thank You!</h2>
            <p className="text-gray-400 text-center mb-6">Your request has been successfully submitted.</p>
            <button className="auth-button" onClick={handleBackToLogin}>Back to Login</button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
        <div className="space-y-4 animate-slide">{renderStep()}</div>
      </div>
    </div>
  );
}
