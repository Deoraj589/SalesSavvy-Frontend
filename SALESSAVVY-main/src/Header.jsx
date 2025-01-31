import React from 'react';
import { CartIcon } from './CartIcon';
import { ProfileDropdown } from './ProfileDropdown';
import './assets/styles.css';
import Logo from './Logo';
import { useDarkMode } from './darkmode'; // Import the useDarkMode hook

export function Header({ cartCount, username }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Get dark mode state and toggle function

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="header-content">
        <Logo />
        <div className="header-actions">
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? '🌞' : '🌙'} {/* Sun icon for light mode, moon icon for dark mode */}
          </button>
          <CartIcon count={cartCount} />
          <ProfileDropdown username={username} />
        </div>
      </div>
    </header>
  );
}