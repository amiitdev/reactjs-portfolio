import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Global floating background elements - make sure they don't block content */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse pointer-events-none"></div>
      <div
        className="fixed bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse pointer-events-none"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Main content - remove any overflow restrictions */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
