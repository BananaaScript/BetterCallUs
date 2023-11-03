import React, { Component } from 'react';
import './styles/FAQ.css'

export default class Home extends Component {
    render(){
        return(
            <>
                <div className='problemasHome'>

                    <h3>Tipo de problema 01</h3>

                    <div className='botoes'>
                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Problemas referentes a Mal atendimento</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Como acelerar um computador lento?</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Como escolher o melhor computador para programação?</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Qual é a diferença entre memória RAM e memória de armazenamento?</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Como faço para atualizar os drivers do meu computador?</div>
                        </button>

                    </div>
                </div>
                <div className='problemasHome'>
                    <h3>Tipo de Problema 02</h3>

                    <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é overclocking?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como aprender a programar?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual a diferença entre programação front-end e back-end?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual é a diferença entre uma CPU e uma GPU?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é um disco rígido (HDD) e um disco de estado sólido (SSD)?</div>
                    </button>
                    </div>
                </div>
                <div className='problemasHome'>   
                    <h3>Tipo de Problema 03</h3>

                    <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como escolher o melhor tipo de armazenamento para o meu computador?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como faço para atualizar a placa de vídeo do meu computador?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual é a diferença entre software livre e software comercial?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é um sistema operacional de código aberto?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é um sistema de gerenciamento de conteúdo (CMS)?</div>
                    </button>
                    
                    </div>
                </div>
                
                
                <div className='problemasHome'>   
                    <h3>Respostas Comuns</h3>

                    <div className='botoes'>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é uma placa de captura e para que serve?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é um cavalo de Troia (trojan) e como funciona?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual a melhor maneira de se proteger contra virus e malwares ?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual a importância da VPN ?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como proteger minha privacidade online?</div>
                    </button>
                    </div>
            
                </div>
            </>
        )
    }
}