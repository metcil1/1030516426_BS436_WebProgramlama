import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
        }
    }

    componentDidMount() {
        this.newGame();
    }


    newGame() {
        this.setState({
            game: {
                index: Math.floor(Math.random() * 3),
                sonuc: undefined,
                resim: ["img/red.jpg", "img/red.jpg", "img/red.jpg"],
                sayac: 0,
                oyunbittimi: false,
                victory: false,
                defeat: false
            }
        })
    }

    Clickİmage(i) {
        const game = this.state.game;

        if (!game.oyunbittimi) {
            const yeniresim = [...game.resim];
            let durum;

            if (game.index === i) {
                this.setState({
                    game: {
                        victory: true
                    }
                })
            } else {
                this.setState({
                    game: {
                        defeat: true
                    }
                })
            }
            this.setState({
                resim: yeniresim,
                sayac: this.state.sayac + 1,
                sonuc
            });

            if (durum) {
                this.setState({
                    oyunbittimi: true
                })
            }

        }
    }



    render() {
        const game = this.state.game;

        if (!game) {
            return (
                <h2>Yükleniyor</h2>
            )
        }

        if (game.victory) {
            return (
                <div className="game-result">
                    <h2>Kazandın</h2>
                    <button onClick={this.newGame} className="play new-game-button">
                        Yeni Oyun
                    </button>
                </div>
            )
        }

        if (game.defeat) {
            return (
                <div className="game-result">
                    <h2>Kaybettiniz</h2>
                    <div className="action">
                        <button onClick={this.newGame} className="play new-game-button">
                            Yeni Oyun
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h2 className="text-center font-weight-bold">Kedi Bulmaca</h2>
                <p className="lead mt-4">Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte kedi kartını bulamaz isen 2.seçim hakkı tanınacaktır.</p>
                <p className="lead">Kediyi bulmak için karta tıklamalısın.</p>

                <img className="rounded" src={resim[0]} onClick={() => { this.Clickİmage(0) }} />
                <img className="rounded" src={resim[1]} onClick={() => { this.Clickİmage(1) }} />
                <img className="rounded" src={resim[2]} onClick={() => { this.Clickİmage(2) }} />

                <div className="mesaj">
                    <p>{sonuc ? sonuc : "Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
                    {sonuc && <p>
                        Yeni bir oyun oynamak istersen <span onClick={this.newGame} className='link'>buraya</span> tıklayabilirsin.
                    </p>}
                </div>


            </div>
        )
    }
}

export default Game;

ReactDOM.render(<App />, document.getElementById("root"));
