import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  const [form, setForm] = useState({ email: "", pass: "", remember: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed in (mock)\nEmail: ${form.email}\nRemember: ${form.remember}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-sky-100 p-6">
      <div className="w-full max-w-6xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Illustration */}
        <div className="flex-1.5 relative flex items-center justify-center bg-gradient-to-b from-blue-50/40 to-blue-100/20">
          {/* Bubbles */}
          <div className="absolute w-20 h-20 rounded-full bg-white/40 animate-bounce top-12 left-20"></div>
          <div className="absolute w-12 h-12 rounded-full bg-white/30 animate-pulse top-1/2 left-10"></div>
          <div className="absolute w-16 h-16 rounded-full bg-white/30 animate-bounce bottom-12 right-1/4"></div>

          {/* SVG Fish Illustration */}
          <svg className="w-[500px] h-[400px]" viewBox="0 0 900 700">
            <ellipse cx="240" cy="220" rx="240" ry="150" fill="#B0E6F0" opacity="0.4" />
            <ellipse cx="540" cy="350" rx="330" ry="200" fill="#EAF6FF" opacity="0.5" />

            {/* Main Fish */}
            <g className="animate-[swim_6s_linear_infinite]" transform="translate(420,280) scale(1.1)">
              <ellipse cx="0" cy="0" rx="120" ry="78" fill="#3A91C8" />
              <ellipse cx="-8" cy="18" rx="80" ry="52" fill="#B0E6F0" />
              <path d="M120 0 C160 -28 160 28 120 0 Z" fill="#1059B6" />
              <circle cx="-40" cy="-8" r="12" fill="#fff" />
              <circle cx="-38" cy="-7" r="5" fill="#1059B6" />
            </g>
          </svg>
        </div>

        {/* Right Login Form */}
        <div className="flex-1 p-10 flex items-center justify-center">
          <Card className="w-full max-w-md shadow-md border-0 bg-white/90 backdrop-blur">
            <CardContent className="p-6">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white font-bold">
                  FR
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Fishroot</h1>
                  <p className="text-sm text-gray-500">
                    Catch your dreams — sign in to continue
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-gray-600">
                    Password <a href="#" className="text-blue-700">Forgot?</a>
                  </label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={form.pass}
                    onChange={(e) => setForm({ ...form, pass: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <Checkbox
                      checked={form.remember}
                      onCheckedChange={(val) => setForm({ ...form, remember: val })}
                    />
                    Remember me
                  </label>
                  <Button type="submit" className="bg-gradient-to-r from-sky-500 to-blue-700">
                    Sign In
                  </Button>
                </div>

                {/* Social Login */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">Google</Button>
                  <Button variant="outline" className="flex-1">GitHub</Button>
                </div>
              </form>

              {/* Footer */}
              <p className="text-center text-xs text-gray-500 mt-6">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-700">Create an Account</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
