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
                        
                    <Botao textoBotao="Sistema Operacional Incompatível" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas com Atualização de Software" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Computador com desempenho lento" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como ter uma boa gestão de Armazenamento ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas ao tentar abrir um programa" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de segurança</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Como criar senhas fortes ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas de Firewall" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Autenticação de dois fatores e outras formas de verificação" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Invandiram minha conta, e agora ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Segurança de rede" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>
                
    
                <div className='problemasHome'>   
                    <h3>Virus e Malware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Como saber se meu computador está com vírus ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como se proteger contra virus e malwares" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como livrar meu computador de vírus e ameaças" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como virus podem afetar meu computador ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="O que pode causar virus no meu computador ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de Hardware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Computador não liga" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Dispositivos USB não conectam" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como saber a saúde do meu HD/SSD ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="O computador está aquecendo muito" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="O computador está fazendo muito barulho" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>
                

                <div className='problemasHome'>   
                    <h3>Problemas com Áudio e Video</h3>

                    
                    <div className='botoes'>
                        
                    <Botao textoBotao="O computador não dá video ao ligar" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Computador sem áudio" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como atualizar meus drivers de video ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como atualizar meus drivers de áudio ?" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Riscos ou Artefatos na tela" conteudo={
                    <div>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>


            </>
        )
    }
}