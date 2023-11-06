import React, { Component } from 'react';
import './styles/FAQ.css'

export default class Home extends Component {
    render(){
        return(
            <>
                <div className='pesquisaAPP'>
                    <input type="text" placeholder='Procure um problema abaixo '/>
                </div>
                <div className='problemasHome'>

                    <h3>Tipo de Problemas de rede</h3>

                    <div className='botoes'>
                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>*******</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>*******</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>*******</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>*******</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>*******</div>
                        </button>

                    </div>
                </div>
                <div className='problemasHome'>
                    <h3>Tipo de Problemas de software</h3>

                    <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>
                    </div>
                </div>
                <div className='problemasHome'>   
                    <h3>Tipo de Problemas de segurança</h3>

                    <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>
                    
                    </div>
                </div>
                
                
                <div className='problemasHome'>   
                    <h3>Respostas Comuns</h3>

                    <div className='botoes'>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>*******</div>
                    </button>
                    </div>
            
                </div>
            </>
        )
    }
}