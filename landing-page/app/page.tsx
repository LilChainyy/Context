'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            MarketStory
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-50 to-emerald-50">

        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto text-center" style={{zIndex: 10}}>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Understand Markets
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {' '}Like Never Before
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Real market events turned into simple visual stories.
            Learn why prices move through earnings, Fed meetings, and CPI releases —
            beautifully designed for curious minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#signup"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Start Learning
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Learn on the Go
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Beautiful, bite-sized lessons that fit your lifestyle. Available on iOS and Android.
              </p>
            </div>

            <div className="relative flex items-center justify-center gap-8 md:gap-12">
              {/* Left Phone Mockup */}
              <div className="hidden md:block relative transform rotate-[-6deg] hover:rotate-[-3deg] transition-transform duration-300">
                <div className="w-[280px] bg-white rounded-[3rem] shadow-2xl p-3">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] overflow-hidden">
                    {/* Phone notch */}
                    <div className="flex justify-center pt-3 pb-2">
                      <div className="w-24 h-6 bg-slate-900 rounded-full"></div>
                    </div>
                    {/* Phone content */}
                    <div className="px-6 py-8">
                      <div className="text-3xl font-bold text-slate-900 mb-4">
                        LEARN<br/>MARKET<br/>BASICS
                      </div>
                      <p className="text-sm text-slate-600 mb-6">
                        Start with fundamentals. Understand earnings, Fed meetings, and why prices move.
                      </p>
                      <div className="space-y-3">
                        <div className="h-2 bg-green-200 rounded-full w-full"></div>
                        <div className="h-2 bg-green-200 rounded-full w-3/4"></div>
                        <div className="h-2 bg-slate-200 rounded-full w-1/2"></div>
                      </div>
                      <button className="mt-8 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold w-full">
                        Start Lesson
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Phone Mockup - Main with Chart */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <div className="w-[300px] md:w-[320px] bg-white rounded-[3rem] shadow-2xl p-3">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] overflow-hidden">
                    {/* Phone notch */}
                    <div className="flex justify-center pt-3 pb-2">
                      <div className="w-24 h-6 bg-slate-900 rounded-full"></div>
                    </div>
                    {/* Phone content - Chart View */}
                    <div className="px-4 py-6">
                      {/* Stock Header */}
                      <div className="mb-4">
                        <div className="text-xs text-slate-500 mb-1">NVDA</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-slate-900">$364.74</span>
                          <span className="text-sm text-red-500">-4.64%</span>
                        </div>
                      </div>

                      {/* Chart SVG */}
                      <div className="bg-white rounded-xl p-3 mb-4 h-[280px] relative">
                        <svg className="w-full h-full" viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="phoneChartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" style={{stopColor: '#059669', stopOpacity: 1}} />
                              <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 1}} />
                            </linearGradient>
                          </defs>

                          {/* Grid Lines */}
                          <line x1="0" y1="60" x2="280" y2="60" stroke="#e5e7eb" strokeWidth="1" />
                          <line x1="0" y1="120" x2="280" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                          <line x1="0" y1="180" x2="280" y2="180" stroke="#e5e7eb" strokeWidth="1" />

                          {/* Stock Chart Line */}
                          <path
                            d="M 10 100 L 40 90 L 60 60 L 80 70 L 100 50 L 120 65 L 140 40 L 160 50 L 180 110 L 200 100 L 220 130 L 240 120 L 270 140"
                            stroke="url(#phoneChartGradient)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Event Marker 1 - Earnings */}
                          <g transform="translate(55, 25)">
                            <circle cx="0" cy="0" r="8" fill="#10b981" opacity="0.8" />
                            <rect x="-35" y="-45" width="70" height="35" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
                            <text x="-28" y="-30" fill="#047857" fontSize="10" fontWeight="600">📊 Earnings</text>
                            <text x="-28" y="-18" fill="#059669" fontSize="9" fontWeight="bold">+6</text>
                            <line x1="0" y1="-10" x2="0" y2="30" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
                          </g>

                          {/* Event Marker 2 - Product */}
                          <g transform="translate(135, 5)">
                            <circle cx="0" cy="0" r="8" fill="#10b981" opacity="0.8" />
                            <rect x="-32" y="-42" width="64" height="32" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
                            <text x="-26" y="-27" fill="#047857" fontSize="9" fontWeight="600">🚀 Product</text>
                            <text x="-26" y="-16" fill="#059669" fontSize="8" fontWeight="bold">+8</text>
                            <line x1="0" y1="-10" x2="0" y2="35" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
                          </g>

                          {/* Event Marker 3 - News */}
                          <g transform="translate(175, 75)">
                            <circle cx="0" cy="0" r="8" fill="#ef4444" opacity="0.8" />
                            <rect x="-30" y="12" width="60" height="30" rx="6" fill="white" stroke="#ef4444" strokeWidth="1.5" />
                            <text x="-24" y="27" fill="#dc2626" fontSize="9" fontWeight="600">📰 Lawsuit</text>
                            <text x="-24" y="36" fill="#ef4444" fontSize="8" fontWeight="bold">-3</text>
                            <line x1="0" y1="8" x2="0" y2="12" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
                          </g>

                          {/* Data Points */}
                          <circle cx="60" cy="60" r="4" fill="#10b981" />
                          <circle cx="140" cy="40" r="4" fill="#10b981" />
                          <circle cx="180" cy="110" r="4" fill="#ef4444" />
                        </svg>
                      </div>

                      {/* Bottom Legend */}
                      <div className="text-xs text-slate-500 text-center">
                        Tap events to learn more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone Mockup */}
              <div className="hidden md:block relative transform rotate-[6deg] hover:rotate-[3deg] transition-transform duration-300">
                <div className="w-[280px] bg-white rounded-[3rem] shadow-2xl p-3">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] overflow-hidden">
                    {/* Phone notch */}
                    <div className="flex justify-center pt-3 pb-2">
                      <div className="w-24 h-6 bg-slate-900 rounded-full"></div>
                    </div>
                    {/* Phone content */}
                    <div className="px-6 py-8">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          Lesson Complete!
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          You've earned 50 points
                        </p>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Your streak</span>
                          <span className="font-semibold text-slate-900">7 days 🔥</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Level progress</span>
                          <span className="font-semibold text-slate-900">Level 3</span>
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold w-full">
                        Next Lesson
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Duolingo of Market Understanding
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Turn curiosity into confident action with intuitive, visual learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Visual Stories</h3>
            <p className="text-slate-600">
              Complex market events become clear through beautiful, intuitive visuals.
              See the story behind every price movement.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Real Market Events</h3>
            <p className="text-slate-600">
              Learn from actual earnings reports, Fed meetings, and CPI releases.
              Understand why markets move with real-world examples.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Built for Gen-Z</h3>
            <p className="text-slate-600">
              No jargon, no clutter. Just simple, engaging lessons that fit your lifestyle.
              Turn curiosity into confident investing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Market Journey
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be among the first to learn markets the easy way.
            Get early access when we launch.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-white font-medium">
                Thanks for signing up! We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 md:mb-0">
            MarketStory
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition">Twitter</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition">LinkedIn</a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition">GitHub</a>
          </div>
        </div>
        <div className="text-center mt-8 text-slate-500">
          <p>&copy; 2025 MarketStory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
