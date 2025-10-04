import React, { useState } from 'react';

const Login3D = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="scene">
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* Front Face: Sign In */}
        <div className="card-face card-face-front">
          <div className="brand">
            <div className="logo">FR</div>
            <div>
              <h1>Fishroot</h1>
              <p className="lead">Catch your dreams — sign in</p>
            </div>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" placeholder="you@company.com" />
            </div>
            <div className="input-group">
              <label htmlFor="pass">Password</label>
              <input id="pass" type="password" placeholder="••••••••" />
            </div>
            <button className="btn" type="submit">Sign In</button>
          </form>
          <p className="small-text">
            Don't have an account?{' '}
            <a href="#" className="link" onClick={handleFlip}>
              Create one
            </a>
          </p>
        </div>

        {/* Back Face: Create Account */}
        <div className="card-face card-face-back">
           <div className="brand">
            <div className="logo">FR</div>
            <div>
              <h1>Join Fishroot</h1>
              <p className="lead">Start your journey today</p>
            </div>
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="new-email">Email</label>
              <input id="new-email" type="text" placeholder="you@company.com" />
            </div>
            <div className="input-group">
              <label htmlFor="new-pass">Create Password</label>
              <input id="new-pass" type="password" placeholder="••••••••" />
            </div>
            <button className="btn" type="submit">Create Account</button>
          </form>
          <p className="small-text">
            Already have an account?{' '}
            <a href="#" className="link" onClick={handleFlip}>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login3D;