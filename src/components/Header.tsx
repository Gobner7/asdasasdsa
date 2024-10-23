import React from 'react';
import { useAuth } from '../services/auth';
import { Button } from '@tremor/react';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-900">CS2 Market Analytics</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-gray-700">{user?.email}</span>
              <Button variant="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;