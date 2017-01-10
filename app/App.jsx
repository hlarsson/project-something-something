import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';
import appStyle from './app.scss';

class App extends Component {
    render() {
        return (
            <div className={appStyle.mainWrapper}>
                <AppBar title="React Toolbox">
                    <Navigation type="horizontal">
                    <Link href="http://" label="Inbox" icon="inbox" />
                    <Link href="http://" active label="Profile" icon="person" />
                    </Navigation>
                </AppBar>
                <div className={appStyle.contentWrapper}>
                    <main className={appStyle.mainContent}>
                        Main content
                    </main>
                    <aside className={appStyle.rightContent}>
                        Right content
                    </aside>
                </div>
                <footer>…</footer>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);
