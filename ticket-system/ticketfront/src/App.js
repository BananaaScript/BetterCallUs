import logo from './logo.svg'
import {useEffect, useState} from "react"
import './App.css'
import {
  criarTicket,
  deletarTicket,
  pegarTodosOsTickets,
  atualizarTicket 
} from './service/ticketService'
import FormDoTicket from './componentes/formDoTicket/formDoTicket'
import { formatDate } from './util/dataUtil'

function App() {
  const [tickets, setTickets] = useState([])
  const [ticket, setTicket] = useState({})

  const conseguirTodosOsTickets = async () => {
    setTickets(await pegarTodosOsTickets())
  }

  const enviarRequisicaoDeCriacao = async (
    id, 
    sumario, 
    prioridade, 
    status, 
    dataDeCriacao, 
    dataDeAtualizacao
  ) => {
    const ticketCriado = await criarTicket({
      id, 
      sumario, 
      prioridade, 
      status, 
      dataDeCriacao, 
      dataDeAtualizacao      
    })

    if (!ticketCriado) {
      return
    }

    conseguirTodosOsTickets();
    setTicket(ticketCriado)
  }

  useEffect(() => {
    conseguirTodosOsTickets()
  }, [])

  return (
    <div className="App">
      <FormDoTicket
        id = {ticket.id}
        sumario = {ticket.sumario}
        prioridade = {ticket.prioridade}
        status = {ticket.status}
        dataDeCriacao = {
          ticket.dataDeCriacao ? new Date(ticket.dataDeCriacao) : new Date()
        }
        dataDeAtualizacao = {
          ticket.dataDeAtualizacao ? new Date(ticket.dataDeAtualizacao) : new Date()
        }
        soLeitura = {false}
        noEnvio = {enviarRequisicaoDeCriacao}
      />

      <h1>Tickets</h1>
      {tickets.map((ticket, index) => (
        <div key={index} style={{border: "1px solid black"}}>
          <p>id: {ticket.id}</p>
          <p>sumario: {ticket.sumario}</p>
          <p>prioridade: {ticket.prioridade}</p>
          <p>status: {ticket.status}</p>
          <p>data de criação: {ticket.dataDeCriacao}</p>
          <p>data de atualização: {ticket.dataDeAtualizacao}</p>
          </div>
      ) 
      )}
    </div>
  );
}

export default App;
