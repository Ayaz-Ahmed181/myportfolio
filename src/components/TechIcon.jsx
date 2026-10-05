import React from 'react';

const icons = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24">
      <rect width="24" height="24" fill="#F7DF1E" rx="3" />
      <path
        d="M13.7 18.2c.7 1.2 1.8 1.9 3.5 1.9 1.7 0 2.8-.8 2.8-2.1 0-1.4-.9-1.9-2.5-2.6l-.9-.4c-2.4-1-4-2.3-4-5 0-2.6 2-4.6 5.1-4.6 2.3 0 3.8.9 4.8 2.7l-2.4 1.5c-.5-.9-1.2-1.3-2.3-1.3-1.1 0-1.9.7-1.9 1.6 0 1.1.7 1.6 2.2 2.2l.9.4c2.8 1.2 4.4 2.5 4.4 5.3 0 3-2.3 4.9-5.9 4.9-3.2 0-5.1-1.6-6-3.5l2.3-1.5zM6.8 19.9l-2.3-1.4c.5-.9 1-1.4 1.9-1.4.8 0 1.2.4 1.2 1.6v-8.2H10V18c0 3.1-1.8 4.7-4.4 4.7-1.8 0-3.3-.9-3.9-2.8z"
        fill="#000000"
      />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 4.7H4.9l.4 4.7h13.4l-.5 5.5-4.2 1.2-4.2-1.2-.3-2.8H7l.4 4.8 4.6 1.3 4.6-1.3.9-10.2H4.5" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" fill="#1572B6">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.6 4.7H4.9l.4 4.7h13.4l-.5 5.5-4.2 1.2-4.2-1.2-.3-2.8H7l.4 4.8 4.6 1.3 4.6-1.3.9-10.2H4.5" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" fill="#5FA04E">
      <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.6v6.8L12 19.7l7.5-4.3V8.6L12 4.3z" />
    </svg>
  ),
  expressjs: (
    <svg viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M6 4h12v3H6V4zm0 6h12v3H6v-3zm0 6h12v3H6v-3z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" fill="#47A248">
      <path d="M12 0C11.6.4 8 7.3 8 13.5c0 4.6 2.5 8.5 4 10.5 1.5-2 4-5.9 4-10.5C16 7.3 12.4.4 12 0zm-.5 18.5V4.6c-2.4 3.7-2.9 8.2-1.2 12.1.5.7 1 1.3 1.2 1.8zm1 0c.2-.5.7-1.1 1.2-1.8 1.7-3.9 1.2-8.4-1.2-12.1v13.9z" />
    </svg>
  ),
  cpp: (
    <svg viewBox="0 0 24 24" fill="#00599C">
      <path d="M11.5 4.5a8 8 0 1 0 0 15 8 8 0 0 0 6.4-3.2l-2.4-1.6A5 5 0 1 1 11.5 7.5a5 5 0 0 1 4 2l2.4-1.6A8 8 0 0 0 11.5 4.5zM17 11h2V9h1v2h2v1h-2v2h-1v-2h-2v-1z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24">
      <path
        d="M11.9 1.5c-3.1 0-5.1.7-5.1 2.8v2.1h5.2v.7H4.5C2.4 7.1 1 8.8 1 11.9c0 3.2 1.4 4.8 3.5 4.8h1.4v-2.1c0-2.3 1.9-4.2 4.2-4.2h5.2V7.6c0-2.8-2.6-6.1-6.4-6.1zm-2 1.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22.5c3.1 0 5.1-.7 5.1-2.8v-2.1h-5.2v-.7h7.5c2.1 0 3.5-1.7 3.5-4.8 0-3.2-1.4-4.8-3.5-4.8H18v2.1c0 2.3-1.9 4.2-4.2 4.2H8.6v2.8c0 2.8 2.6 6.1 6.4 6.1zm2.1-1.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        fill="#FFD438"
      />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="#F05032">
      <path d="M23.5 10.9L13.1.5c-.7-.7-1.8-.7-2.5 0L8.2 2.9l3.2 3.2c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.1 3.1c.8-.3 1.7-.1 2.3.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.5-.5-2.3l-2.9-2.9v6.5c.2.2.4.4.5.7.8.8.8 2.1 0 2.9s-2.1.8-2.9 0-2.1-.8-2.1-2.9c0-.8.3-1.5.8-2v-6.6c-.5-.5-.8-1.2-.8-2 0-.8.3-1.5.8-2L.5 13.1c-.7.7-.7 1.8 0 2.5l10.4 10.4c.7.7 1.8.7 2.5 0l10.1-10.1c.7-.7.7-1.8 0-2.5z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="#3178C6">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path d="M11.5 11h-2v8h-2v-8h-2V9.3h6V11zm7.8 4.4c-.2-.6-.6-1-1.2-1.3l-1.3-.7c-.6-.3-.9-.6-.9-1 0-.4.3-.7.8-.7.6 0 1 .3 1.3.8l1.6-1.1c-.6-1-1.6-1.5-2.9-1.5-1.9 0-3.2 1.1-3.2 2.7 0 1.1.6 1.9 1.8 2.4l1.2.6c.7.4 1 .7 1 1.2 0 .5-.4.8-1 .8-.8 0-1.3-.4-1.6-1.1l-1.7 1.1c.6 1.3 1.8 1.9 3.3 1.9 2.2 0 3.5-1.2 3.5-2.9 0-.5-.1-1-.4-1.4z" fill="#FFFFFF" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="#CFCFCF">
      <path d="M2 3h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 4l5 4-5 4v-2l2.5-2L5 9V7zm8 8h6v-2h-6v2z" />
    </svg>
  ),
};

const normalizeName = (name) => {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (clean.includes('type') || clean === 'ts') return 'typescript';
  if (clean.includes('react')) return 'react';
  if (clean.includes('java') || clean.includes('js')) return 'javascript';
  if (clean.includes('html')) return 'html';
  if (clean.includes('css')) return 'css';
  if (clean.includes('node')) return 'nodejs';
  if (clean.includes('express')) return 'expressjs';
  if (clean.includes('mongo')) return 'mongodb';
  if (clean.includes('cpp') || (clean.includes('c') && clean.includes('p'))) return 'cpp';
  if (clean.includes('python')) return 'python';
  if (clean.includes('github')) return 'github';
  if (clean.includes('git')) return 'git';
  return 'api';
};

const TechIcon = ({ name, className = '' }) => {
  const iconKey = normalizeName(name);
  const iconSvg = icons[iconKey] || icons.api;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {iconSvg}
    </span>
  );
};

export default TechIcon;
