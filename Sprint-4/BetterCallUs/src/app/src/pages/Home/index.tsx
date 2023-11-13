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

                    <h3>Problemas de rede</h3>

                    <div className='botoes'>
                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Problema com conectividade na rede</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Latência Alta frequente</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Queda constante da internet</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Rede sobrecarregada</div>
                        </button>

                        <button className="quadrado">
                            <div className='iconebotao'></div>
                            <div className='textobotao'>Senha de rede esquecida</div>
                        </button>

                    </div>
                </div>
                <div className='problemasHome'>
                    <h3>Problemas de software</h3>

                    <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Sistema Operacional incompatível</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Problemas com atualização de Software</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Computador com desempenho lento</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>como ter uma boa gestão de Armazenamento</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Problemas ao tentar abrir um programa</div>
                    </button>
                    </div>
                </div>
                <div className='problemasHome'>   
                    <h3>Problemas de segurança</h3>

                    <div className='botoes'>
                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Como criar senhas fortes ?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Problemas de Firewall</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Autenticação de dois fatores e outras formas de verificações</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Invadiram minha conta, e agora ?</div>
                    </button>

                    <button className="quadrado">
                        <div className='iconebotao'></div>
                        <div className='textobotao'>Segurança de rede</div>
                    </button>
                    
                    </div>
                </div>
                
                
                <div className='problemasHome'>   
                    <h3>Virus e Malware</h3>

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
                    <h3>Problemas de Hardware</h3>

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
                    <h3>Problemas com Áudio e Video</h3>

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