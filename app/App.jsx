import React from 'react';
import { render } from 'react-dom';
import AppBar from 'react-toolbox/lib/app_bar';
import appStyle from './app.scss';
import SmallNote from './components/SmallNote';

const App = () => {
  return (
    <div className={appStyle.mainWrapper}>
      <AppBar title="Note thingie app bar" />
      <div className={appStyle.contentWrapper}>
        <main className={appStyle.mainContent}>
          <div className={appStyle.grid}>
            <div className={appStyle.gridCol}>
              <SmallNote title="Awesome note 1" text="Awesome text" />
            </div>
            <div className={appStyle.gridCol}>
              <SmallNote title="Awesome note 2" text="Awesome text" />
            </div>
            <div className={appStyle.gridCol}>
              <SmallNote title="Awesome note 3" text="Awesome text" />
            </div>
            <div className={appStyle.gridCol}>
              <SmallNote title="Awesome note 4" text="Awesome text" />
            </div>
            <div className={appStyle.gridCol}>
              <SmallNote title="Awesome note 5" text="Awesome text" />
            </div>
          </div>
        </main>
        <aside className={appStyle.rightContent}>
            Right content
        </aside>
      </div>
      <footer>Footer footer footer footer footer</footer>
    </div>
  );
};

render(
  <App />,
  document.getElementById('app')
);
