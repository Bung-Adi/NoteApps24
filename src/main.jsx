// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteApp from './components/NoteApp';
import './styles/main.scss'

const root = createRoot(document.getElementById('root'));
root.render(< NoteApp />);
