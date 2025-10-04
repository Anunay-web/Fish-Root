import React from "react";
import "./App.css";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const remember = document.getElementById("remember").checked;
    alert(`Signed in (mock)\n\nEmail: ${email}\nRemember: ${remember ? "Yes" : "No"}`);
  };

  return (
    <div className="app">
      <div className="wrap">
        {/* Left Illustration */}
        <div className="art">
          <div className="bubble b1"></div>
          <div className="bubble b2"></div>
          <div className="bubble b3"></div>

          <svg className="scene" viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#B0E6F0" stopOpacity="0.92" />
                <stop offset="1" stopColor="#EAF6FF" stopOpacity="0.92" />
              </linearGradient>
              <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="30" />
              </filter>
            </defs>

            <ellipse cx="240" cy="220" rx="240" ry="150" fill="url(#g1)" filter="url(#blur)" opacity="0.55" />
            <ellipse cx="540" cy="350" rx="330" ry="200" fill="#F1FBFF" filter="url(#blur)" opacity="0.50" />

            <g fill="none" stroke="#8FD3E6" strokeWidth="8" strokeLinecap="round" opacity="0.9">
              <path d="M120 500 C110 420,140 360,120 300" />
              <path d="M160 520 C150 440,180 380,160 320" />
            </g>

            {/* Main fish */}
            <g transform="translate(420,280) scale(1.1)" className="fish">
              <ellipse cx="0" cy="0" rx="120" ry="78" fill="#3A91C8" />
              <ellipse cx="-8" cy="18" rx="80" ry="52" fill="#B0E6F0" opacity="0.95" />
              <path d="M120 0 C160 -28 160 28 120 0 Z" fill="#1059B6" />
              <circle cx="-40" cy="-8" r="12" fill="#fff" />
              <circle cx="-38" cy="-7" r="5" fill="#1059B6" />
              <path d="M0 -62 C-24 -88 -62 -70 -32 -42 Z" fill="#1059B6" opacity="0.95" />
              <path d="M28 18 C68 36 88 12 44 -2 Z" fill="#2e7fb0" opacity="0.9" />
            </g>

            {/* Small fish */}
            <g transform="translate(140,120) scale(0.6)" className="fish2">
              <ellipse cx="0" cy="0" rx="36" ry="22" fill="#9B6F3E" />
              <path d="M36 0 C52 -12 52 12 36 0 Z" fill="#7a5130" />
              <circle cx="-6" cy="-4" r="4" fill="#fff" />
            </g>

            <g transform="translate(720,200) scale(0.8)" className="fish2">
              <ellipse cx="0" cy="0" rx="46" ry="28" fill="#B0E6F0" />
              <path d="M46 0 C66 -18 66 18 46 0 Z" fill="#3A91C8" />
              <circle cx="-8" cy="-3" r="4" fill="#1059B6" />
            </g>
          </svg>
        </div>

        {/* Right Login Panel */}
        <div className="panel">
          <div className="brand">
            <div className="logo">FR</div>
            <div>
              <h1>Fishroot</h1>
              <p className="lead">Catch your dreams — sign in to continue</p>
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" placeholder="you@company.com" required />
            </div>

            <div className="input">
              <label htmlFor="pass">
                Password <a href="#" className="link">Forgot?</a>
              </label>
              <input id="pass" type="password" placeholder="••••••••" required />
            </div>

            <div className="row">
              <label className="remember">
                <input id="remember" type="checkbox" /> Remember me
              </label>
              <button className="btn" type="submit">Sign in</button>
            </div>

            <div className="alt">
              <button type="button" className="social">Sign in with Google</button>
              <button type="button" className="social">Sign in with GitHub</button>
            </div>
          </form>

          <footer className="small">
            Don't have an account? <a className="link" href="#">Create an Account</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
