import React, { useEffect, useState } from 'react';

import { Link, Redirect, Route, Switch } from 'react-router-dom';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => setCount((count) => count + 1), 100);
    return () => clearInterval(interval);
  });

  return <>{count}</>;
};

export const App: React.FC = () => (
  <>
    <h1>Hello!</h1>

    <Switch>
      <Route path="/hello.html">
        <section>This is nice.</section>
        <Link to="/world.html">{'->'} counter page</Link>
      </Route>

      <Route path="/world.html">
        <div>
          Count: <Counter />
        </div>
        <Link to="/">{'<-'} back home</Link>
      </Route>

      <Route>
        <Redirect to="/hello.html" />
      </Route>
    </Switch>
  </>
);
