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
                    <div className='textoproblema'>
                
                <div>
                    <p><strong>Introdução:</strong></p>
                    <p>A conectividade de rede é essencial nos dias de hoje, tanto para uso pessoal quanto profissional. Quando surgem problemas nessa área, podem surgir frustrações e impactos significativos em diversas atividades. Este artigo aborda os principais desafios relacionados à conectividade na rede e fornece soluções práticas para superá-los.</p>
                </div>
                
                <div>
                    <p><strong>Identificando o Problema:</strong></p>
                    <p>O primeiro passo para resolver problemas de conectividade é identificar a origem do issue. Pode ser um problema no hardware, software, configuração da rede ou até mesmo no provedor de serviços. Aqui estão algumas etapas iniciais para diagnosticar o problema:</p>

                    <p><strong>1 - Verifique a Conexão Física:</strong></p>
                    <p>Certifique-se de que todos os cabos estejam devidamente conectados.</p>
                    <p>Verifique se há danos visíveis nos cabos ou nos dispositivos de rede.</p>
                </div>
                
                <div>
                    <p><strong>2 - Reinicie Dispositivos:</strong></p>
                    <p>Reinicie o roteador, modem e o dispositivo que está enfrentando problemas de conectividade.</p>
                </div>
                
                <div>
                    <p><strong>3- Verifique as Configurações de Rede:</strong></p>
                    <p>Garanta que as configurações de rede, como endereço IP e gateway, estejam configuradas corretamente.</p>
                </div>
                
                <div>
                    <p><strong>Soluções Comuns:</strong></p>
                    <p><strong>Problemas de Configuração do Roteador:</strong></p>
                    <p>Acesse a interface de administração do roteador digitando seu endereço IP em um navegador web.</p>
                    <p>Verifique as configurações de segurança, como senhas e filtros de MAC.</p>
                </div>
                
                <div>
                    <p><strong>Atualização de Drivers e Firmware:</strong></p>
                    <p>Certifique-se de que os drivers de rede nos dispositivos estão atualizados.</p>
                    <p>Verifique se há atualizações de firmware disponíveis para o roteador e modem.</p>
                </div>
                
                <div>
                    <p><strong>Problemas de Provedor de Serviços:</strong></p>
                    <p>Entre em contato com o provedor de serviços para verificar se há interrupções na área.</p>
                    <p>Solicite assistência técnica e forneça detalhes sobre os sintomas.</p>
                </div>
                
                <div>
                    <p><strong>Firewall e Antivírus:</strong></p>
                    <p>Desative temporariamente o firewall e o antivírus para ver se eles estão bloqueando a conexão.</p>
                    <p>Certifique-se de que as configurações de segurança não estão bloqueando o tráfego de rede.</p>
                </div>
                
                <div>
                    <p><strong>Ferramentas de Diagnóstico:</strong></p>
                    <p><strong>Ping e Traceroute:</strong></p>
                    <p>Utilize comandos como "ping" e "traceroute" para diagnosticar a conectividade e identificar onde o problema pode estar ocorrendo.</p>
                    <p><strong>Utilize Ferramentas Online:</strong></p>
                    <p>Existem várias ferramentas online que podem ajudar a diagnosticar problemas de conectividade, como testes de velocidade de internet e verificações de ping.</p>
                </div>
                
                <div>
                    <p><strong>Conclusão:</strong></p>
                    <p>Resolver problemas de conectividade na rede pode ser desafiador, mas seguindo uma abordagem sistemática, é possível identificar e corrigir a maioria dos problemas...</p>
                    <p>Caso as soluções sugeridas não resolvam o problema, é recomendável buscar a ajuda de profissionais de TI ou do provedor de serviços de internet para uma assistência mais especializada.</p>
                </div></div>
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