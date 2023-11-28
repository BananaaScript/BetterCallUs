import Login from "../../App"
import '../Home/styles/adm.css'

export const Adm = () => {
 
  const pagCadastro = () => {
    window.location.href = "/Cadastro";
  }
  const redirectSLA = () =>{
    window.location.href = "/sla"
  }


  return(
    <div className="bodyAdm">
      <div className="privAdm">
            <h3>Bem vindo! Selecione uma das opções abaixo: </h3>
            <div className="opcAdm">
              
                <button className="btnAdm" onClick={pagCadastro}>
                    Editar Privilégios
                </button>
            

                <button className="btnAdm" onClick={redirectSLA}>
                    Definir Service Level Agreement (SLA)
                </button>



            </div>

      </div>
    </div>

  )
}