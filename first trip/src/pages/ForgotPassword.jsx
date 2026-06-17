import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset password for:", email);

    setSubmitted(true);
  };

  return (
    <div className="forgot-page">
      {/* LEFT PANEL */}
      <div className="forgot-left">
        <div className="forgot-brand">
          <h1>FirstTrip</h1>

          <p>
            Don't worry. It happens. Enter your email address and we'll send
            you instructions to reset your password securely.
          </p>
        </div>

        <div className="forgot-features">
          <div className="forgot-feature">
            <span>✓</span>
            <p>Secure Account Recovery</p>
          </div>

          <div className="forgot-feature">
            <span>✓</span>
            <p>Encrypted Password Reset</p>
          </div>

          <div className="forgot-feature">
            <span>✓</span>
            <p>Fast Verification Process</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="forgot-right">
        <div className="forgot-card">
          {!submitted ? (
            <>
              <div className="forgot-header">
                <h2>Forgot Password?</h2>

                <p>
                  Enter your email address below and we'll send you a reset
                  link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="forgot-form">
                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="forgot-btn">
                  Send Reset Link
                </button>
              </form>

              <div className="forgot-footer">
                <Link to="/login">← Back to Login</Link>
              </div>
            </>
          ) : (
            <div className="success-state">
              <h2>Check Your Email</h2>

              <p>
                We've sent password reset instructions to:
              </p>

              <strong>{email}</strong>

              <Link to="/login" className="back-login-btn">
                Return to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;