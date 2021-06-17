import React, {Component} from 'react'
import './style.css'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            numero: 0,
            botao: 'Go'
        }

        this.timer = null
        this.go = this.go.bind(this)
        this.limpar = this.limpar.bind(this)

    }

//executa o timer e verificar se já está executando
    go(){
        let state = this.state

        if (this.timer !== null) {
            clearInterval(this.timer)
            this.timer = 
            state.botao = 'Go'
        } else {
            this.timer = setInterval(()=>{
                let state = this.state
                state.numero += 0.1
                this.setState(state)
            },100)   
            state.botao = 'Pausar' 
        }
        this.setState(state)
    }

//limpa o timer para zerar
    limpar(){

    }



    render() {
        return (
            <div className="container">
                <h1 className="cronometro">Cronometro</h1>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.go}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Limpar</a>
                </div>

            </div>
        )
    }
}

export default App