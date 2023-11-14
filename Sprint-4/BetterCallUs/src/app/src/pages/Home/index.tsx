import React, { Component } from 'react';
import './styles/FAQ.css'
import Botao from './botao';


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
                        
                    <Botao textoBotao="Problemas com conectividade na rede" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Latência alta frequente" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Queda constante da internet" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Rede sobrecarregada" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Senha de rede esquecida" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>

                </div>




                <div className='problemasHome'>
                    <h3>Problemas de software</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de segurança</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>
                
    
                <div className='problemasHome'>   
                    <h3>Virus e Malware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de Hardware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>
                

                <div className='problemasHome'>   
                    <h3>Problemas com Áudio e Video</h3>

                    
                    <div className='botoes'>
                        
                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Clique Aqui 1" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>


            </>
        )
    }
}