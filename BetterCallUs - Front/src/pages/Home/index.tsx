import React, { Component } from 'react';
import './FAQ.css';
import icon1 from "./img/icones/icon1.png"

export default class Home extends Component {
    render(){
        return(
            <>Home
                <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'><img className='icone' src={icon1} alt="icon1"/></div>
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

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é um sistema de controle de versão?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como faço para atualizar o sistema operacional do meu computador?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Windows x Linux, qual o melhor ?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como faço para desfragmentar o disco rígido do meu computador?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual é a diferença entre uma linguagem compilada e interpretada?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é uma API (Interface de Programação de Aplicativos) e como usá-la?</div>
                    </button>
                    
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>O que é o paradigma de programação funcional?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como faço para depurar (debug) um programa em Python?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Qual linguagem escolher na hora de programar ?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como faço para atualizar a BIOS da minha placa-mãe?</div>
                    </button>

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
            </>
        )
    }
}