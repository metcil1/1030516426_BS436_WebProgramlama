import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Kedi Bulmaca Oyunu</h2>
                <p className="welcome-text">
                Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte kedi kartını bulamaz isen 2.seçim hakkı tanınacaktır.
                </p>
                <div className="action">
                    <Link className="play" to={"/game"}>
                        Oyna
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;
