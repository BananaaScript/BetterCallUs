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
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Queda constante da internet" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Rede sobrecarregada" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Senha de rede esquecida" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>

                </div>




                <div className='problemasHome'>
                    <h3>Problemas de software</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Sistema Operacional Incompatível" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas com Atualização de Software" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Computador com desempenho lento" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como ter uma boa gestão de Armazenamento ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas ao tentar abrir um programa" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de segurança</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Como criar senhas fortes ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas de Firewall" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Autenticação de dois fatores e outras formas de verificação" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Invandiram minha conta, e agora ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Segurança de rede" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>
                
    
                <div className='problemasHome'>   
                    <h3>Virus e Malware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Como saber se meu computador está com vírus ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como se proteger contra virus e malwares" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como livrar meu computador de vírus e ameaças" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como virus podem afetar meu computador ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="O que pode causar virus no meu computador ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de Hardware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Computador não liga" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador que não Liga</strong></p>

                    <p>Se o seu computador não está ligando, siga estas etapas para diagnosticar e resolver o problema:</p>
                
                    <p>1. <strong>Verificação de Alimentação:</strong> Certifique-se de que o cabo de alimentação está corretamente conectado e que a tomada está funcionando. Considere testar com outra fonte de energia.<br/></p>
                
                    <p>2. <strong>Botão de Liga/Desliga:</strong> Verifique se o botão de liga/desliga está funcionando corretamente. Às vezes, um mau contato pode impedir a inicialização.<br/></p>
                
                    <p>3. <strong>Hardware Conectado Corretamente:</strong> Certifique-se de que todos os componentes internos, como memória RAM e placas, estão firmemente conectados aos slots correspondentes.<br/></p>
                
                    <p>4. <strong>Teste com Componentes Mínimos:</strong> Se possível, remova componentes extras e teste apenas com o mínimo necessário para inicialização, como processador, placa-mãe, memória e fonte de alimentação.<br/></p>
                
                    <p>Se mesmo após essas etapas o computador ainda não ligar, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a identificar e resolver esse problema de inicialização.<br/></p></div>
                    } />

                    <Botao textoBotao="Dispositivos USB não conectam" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Dispositivos USB não Conectam</strong></p>

                    <p>Se os seus dispositivos USB não estão conectando corretamente, siga estas etapas para solucionar o problema:</p>
                
                    <p>1. <strong>Verifique as Portas USB:</strong> Certifique-se de que as portas USB não estão danificadas e estão fornecendo energia suficiente. Tente conectar o dispositivo a diferentes portas.<br/></p>
                
                    <p>2. <strong>Teste com Outro Dispositivo:</strong> Verifique se o problema está no dispositivo ou na porta USB testando com outro dispositivo. Isso ajudará a isolar a origem do problema.<br/></p>
                
                    <p>3. <strong>Atualize Drivers:</strong> Certifique-se de que os drivers USB estejam atualizados. O Gerenciador de Dispositivos pode ser útil para essa verificação e atualização.<br/></p>
                
                    <p>4. <strong>Desinstale e Reinstale Drivers:</strong> Se possível, desinstale os drivers USB no Gerenciador de Dispositivos e reinicie o computador para que eles sejam reinstalados automaticamente.<br/></p>
                
                    <p>Se o problema persistir, entre em contato com nossa equipe de suporte técnico. Estamos prontos para ajudar a restabelecer a conectividade USB em seu sistema.<br/></p>
                </div>
                    } />

                    <Botao textoBotao="Como saber a saúde do meu HD/SSD ?" conteudo={
                    <div className='textoproblema'><p><strong>Verificando a Saúde do HD ou SSD</strong></p>

                    <p>Manter o monitoramento regular da saúde do seu HD ou SSD é essencial para prevenir perda de dados. Siga estas etapas para avaliar o estado do seu armazenamento:</p>
                
                    <p>1. <strong>Utilize Ferramentas de Diagnóstico:</strong> Diversas ferramentas gratuitas estão disponíveis online. Escolha uma confiável para verificar a integridade e desempenho do seu dispositivo de armazenamento.<br/></p>
                
                    <p>2. <strong>Verificação de Bad Blocks:</strong> Execute uma verificação de bad blocks para identificar setores defeituosos no HD. SSDs geralmente possuem mecanismos internos que fazem essa verificação automaticamente.<br/></p>
                
                    <p>3. <strong>Análise de Temperatura:</strong> Monitore a temperatura do HD ou SSD, pois temperaturas excessivamente altas podem indicar problemas. Mantenha o dispositivo refrigerado para garantir uma vida útil prolongada.<br/></p>
                
                    <p>4. <strong>Cópias de Segurança Regulares:</strong> Realize cópias de segurança periódicas dos seus dados importantes para evitar perda irreparável, independentemente da saúde atual do seu armazenamento.<br/></p>
                
                    <p>Se encontrar algum problema durante essas verificações ou se precisar de assistência para interpretar os resultados, entre em contato com nossa equipe de suporte técnico. Estamos aqui para garantir a segurança dos seus dados.<br/></p>
                
                </div>
                    } />

                    <Botao textoBotao="O computador está aquecendo muito" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador Aquecendo Muito</strong></p>

                    <p>Se o seu computador está apresentando temperaturas elevadas, siga estas etapas para reduzir o superaquecimento:</p>
                
                    <p>1. <strong>Limpeza de Ventoinhas e Dissipadores:</strong> Remova poeira e sujeira acumuladas nos ventiladores e dissipadores de calor para melhorar a dissipação térmica.<br/></p>
                
                    <p>2. <strong>Verificação da Pasta Térmica:</strong> Certifique-se de que a pasta térmica entre o processador e o dissipador de calor esteja aplicada corretamente. Substitua se necessário.<br/></p>
                
                    <p>3. <strong>Posicionamento e Ventilação:</strong> Coloque o computador em um local bem ventilado, garantindo espaço ao redor para a circulação de ar. Considere a adição de ventoinhas extras se possível.<br/></p>
                
                    <p>4. <strong>Monitoramento de Temperatura:</strong> Utilize programas de monitoramento de temperatura para acompanhar as leituras e identificar componentes específicos que possam estar superaquecendo.<br/></p>
                
                    <p>Se o problema persistir ou se você não se sentir confortável realizando essas etapas, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a evitar danos causados pelo superaquecimento em seu computador.<br/></p>
                
                </div>
                    } />

                    <Botao textoBotao="O computador está fazendo muito barulho" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador Fazendo Muito Barulho</strong></p>

                    <p>Se o seu computador está gerando um ruído excessivo, siga estas etapas para identificar e resolver o problema:</p>
                
                    <p>1. <strong>Limpeza Interna:</strong> Verifique se há acúmulo de poeira nos ventiladores e componentes internos. Faça uma limpeza cuidadosa para garantir o fluxo de ar adequado.<br/></p>
                
                    <p>2. <strong>Verificação dos Ventiladores:</strong> Certifique-se de que todos os ventiladores estejam funcionando corretamente. Substitua aqueles que apresentarem falhas ou ruídos anormais.<br/></p>
                
                    <p>3. <strong>Posicionamento Adequado:</strong> Confirme que o computador está posicionado em uma superfície plana e nivelada para evitar vibrações e ruídos indesejados.<br/></p>
                
                    <p>4. <strong>Verificação do Disco Rígido:</strong> Ruídos provenientes do disco rígido podem indicar problemas. Execute verificações de integridade e considere a substituição se necessário.<br/></p>
                
                    <p>Se o barulho persistir e você não conseguir identificar a causa, entre em contato com nossa equipe de suporte técnico. Estamos prontos para ajudar a resolver esse problema sonoro em seu computador.<br/></p></div>
                    } />

                    </div>
                </div>
                

                <div className='problemasHome'>   
                    <h3>Problemas com Áudio e Video</h3>

                    
                    <div className='botoes'>
                        
                    <Botao textoBotao="O computador não reproduz video ao ligar" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador não Reproduz Vídeo ao Ligar</strong></p>

                    <p>Se o seu computador não está reproduzindo vídeo ao ser ligado, siga estas etapas para solucionar o problema:</p>
                
                    <p>1. <strong>Verifique Conexões do Monitor:</strong> Assegure-se de que o cabo do monitor está corretamente conectado à placa de vídeo ou à saída de vídeo da placa-mãe.<br/></p>
                
                    <p>2. <strong>Teste com Outro Monitor:</strong> Se possível, conecte o computador a outro monitor para descartar problemas com o monitor atual.<br/></p>
                
                    <p>3. <strong>Verificação de Alimentação:</strong> Certifique-se de que o computador está recebendo energia adequada e que todos os componentes estão corretamente conectados.<br/></p>
                
                    <p>4. <strong>Atualização de Drivers Gráficos:</strong> Acesse o Gerenciador de Dispositivos, identifique a placa gráfica e atualize os drivers para a versão mais recente.<br/></p>
                
                    <p>Se mesmo assim o problema persistir, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a restaurar a reprodução de vídeo em seu computador.<br/></p></div>
                    } />

                    <Botao textoBotao="Computador não reproduz áudio" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador não Reproduz Áudio</strong></p>

                    <p>Se o seu computador está enfrentando problemas para reproduzir áudio, siga estas etapas para solucionar o problema:</p>
                
                    <p>1. <strong>Verifique Conexões e Cabos:</strong> Certifique-se de que todos os cabos de áudio estejam corretamente conectados às portas correspondentes.<br/></p>
                
                    <p>2. <strong>Volume e Configurações de Áudio:</strong> Verifique se o volume não está no nível mínimo e confira as configurações de áudio no painel de controle.<br/></p>
                
                    <p>3. <strong>Atualize os Drivers de Áudio:</strong> Acesse o Gerenciador de Dispositivos, identifique a placa de som e atualize os drivers para a versão mais recente.<br/></p>
                
                    <p>4. <strong>Verificação de Dispositivos de Saída:</strong> Certifique-se de que o dispositivo de saída de áudio correto está selecionado nas configurações do sistema.<br/></p>
                
                    <p>Se o problema persistir, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a restaurar a funcionalidade de áudio em seu computador.<br/></p></div>
                    } />

                    <Botao textoBotao="Como atualizar meus drivers de video ?" conteudo={
                    <div className='textoproblema'> <p><strong>Atualizando Drivers de Áudio para Melhor Desempenho</strong></p>

                    <p>Manter seus drivers de áudio atualizados é crucial para garantir uma experiência sonora sem falhas. Siga estas etapas para realizar a atualização:</p>
                
                    <p>1. <strong>Identifique o Modelo da Placa de Som:</strong> Acesse o Gerenciador de Dispositivos e encontre o modelo da sua placa de som.<br/></p>
                
                    <p>2. <strong>Visite o Site do Fabricante:</strong> Navegue até o site do fabricante da placa de som e procure pela seção de suporte ou downloads.<br/></p>
                
                    <p>3. <strong>Baixe e Instale os Drivers Mais Recentes:</strong> Faça o download dos drivers mais recentes compatíveis com o seu sistema operacional e siga as instruções de instalação.<br/></p>
                
                    <p>Em caso de dúvidas ou dificuldades durante o processo, nossa equipe de suporte técnico está à disposição para ajudar. Queremos assegurar que você aproveite ao máximo a qualidade sonora do seu dispositivo.<br/></p></div>
                    } />

                    <Botao textoBotao="Como atualizar meus drivers de áudio ?" conteudo={
                    <div className='textoproblema'>
                    <p><strong>Como Atualizar Meus Drivers de Áudio?</strong></p>
                
                    <p>Drivers de áudio desatualizados podem causar problemas de reprodução. Siga estes passos para garantir um som de alta qualidade em seu dispositivo:</p>
                    <p>1. <strong>Identifique o Modelo da Placa de Som:</strong> Acesse o Gerenciador de Dispositivos e encontre o modelo da sua placa de som.</p>
                    <p>2. <strong>Visite o Site do Fabricante:</strong> Acesse o site do fabricante da placa de som e procure pela seção de suporte ou downloads.</p>
                    <p>3. <strong>Baixe e Instale os Drivers Mais Recentes:</strong> Faça o download dos drivers mais recentes compatíveis com o seu sistema operacional e siga as instruções de instalação.</p>
                    <p>Não hesite em contatar nossa equipe de suporte técnico caso encontre dificuldades durante esse processo. Estamos aqui para garantir que você desfrute de uma experiência sonora sem interrupções.</p></div>
                    } />

                    <Botao textoBotao="Riscos ou Artefatos na tela" conteudo={
                    <div className='textoproblema'><p><strong>O Que São Riscos ou Artefatos na Tela?</strong></p>

                    <p>Refere-se a imperfeições visuais, como linhas, manchas ou distorções, durante a operação normal. Pode ser causado por problemas de hardware ou software.</p>
                    <p><strong>Causas Comuns:</strong></p>
                    <p>
                        1. <strong>Hardware Defeituoso:</strong> Danos físicos, mau funcionamento de componentes ou conectores soltos.
                    </p><p>
                        2. <strong>Problemas de Software:</strong> Drivers desatualizados, conflitos ou instabilidade do sistema operacional.</p>
                    <p>
                        3. <strong>Problemas de Conectividade:</strong> Cabos soltos, conexões instáveis ou incompatibilidades entre dispositivos.
                    </p>
                    <p><strong>Identificação:</strong></p>
                    <p>
                        1. <strong>Examine Fisicamente o Dispositivo:</strong> Verifique danos físicos evidentes na tela.
                    </p>
                    <p>
                        2. <strong>Teste com Diferentes Conteúdos:</strong> Observe se os artefatos aparecem com tipos específicos de conteúdo.
                    </p>
                    <p>
                        3. <strong>Atualize Drivers e Software:</strong> Mantenha tudo atualizado para garantir compatibilidade e estabilidade.
                    </p>
                    <p><strong>Soluções Possíveis:</strong></p>
                    <p>
                        1. <strong>Verificação de Hardware:</strong> Procure assistência técnica para danos físicos.
                    </p>
                    <p>
                        2. <strong>Atualização de Drivers:</strong> Mantenha os drivers relacionados à exibição atualizados.
                    </p>
                    <p>
                        3. <strong>Teste de Conectividade:</strong> Verifique cabos e conexões, trocando por melhores, se necessário.
                    </p>
                    <p><strong>Contate nosso Suporte Técnico:</strong></p>
                    <p>
                        Se as soluções mencionadas não resolverem, entre em contato conosco. Estamos aqui para garantir uma experiência tecnológica sem complicações.
                    </p>
                
                </div>
                    } />

                    </div>
                </div>


            </>
        )
    }
}