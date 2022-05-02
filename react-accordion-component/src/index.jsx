import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  {
    id: 1,
    topic: 'Hypertext Markup Language',
    details: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    id: 2,
    topic: 'Cascading Style Sheets',
    details: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.'
  },
  {
    id: 3,
    topic: 'JavaScript',
    details: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard'
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Accordion data={topics} />
);
