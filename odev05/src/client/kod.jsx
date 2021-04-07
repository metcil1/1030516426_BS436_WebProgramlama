import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './game';
import Home from './home';

const notFound = () => {
    return(
        <div>
            <h2>Sayfa bulunamadı : 404</h2>
            <p>Aradığınız sayfaya ulaşılamadı. Daha sonra tekrar deneyiniz.</p>
        </div>
    )
}


class App extends Component {
  
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/" component={Home} />
                    <Route component={notFound}/>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
