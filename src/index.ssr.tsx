import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { App } from './App';

type DocumentProps = {
  path: string;
  bundlePath: string;
};

const Document: React.FC<DocumentProps> = ({ path, bundlePath }) => (
  <html>
    <head>
      <title>React App</title>
    </head>
    <body>
      <div id="app">
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      </div>
      <script src={bundlePath} />
    </body>
  </html>
);

type Locals = {
  path: string;
  assets: {
    main: string;
  };
};

export default (locals: Locals) => {
  return [
    '<!DOCTYPE html>',
    '<!-- What are you looking for? -->',
    ReactDOMServer.renderToStaticMarkup(<Document path={locals.path} bundlePath={locals.assets.main} />),
  ].join('');
};

if (document) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  );
}
