const urlBase = process.env.REACT_APP_BASE_URL 

export const pegarTodosOsTickets = async () => {
    const respostaInicial = await fetch(`${urlBase}/all`)
    return await respostaInicial.json()
}

export const pegarTicket = async (id) => {
    const respostaInicial = await fetch(`${urlBase}/ticket/${id}`)
    return await respostaInicial.json()
}

export const criarTicket = async (ticket) => {
    const respostaInicial = await fetch(`${urlBase}/ticket`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(ticket)
    })
    if (respostaInicial.status !== 200) {
        console.error("não foi possível criar o ticket.")
        return null
    } 

    return await respostaInicial.json()
}

export const atualizarTicket = async (id, ticket) => {
    if (ticket.id) {
        delete ticket.id
    }
    const respostaInicial = await fetch(`${urlBase}/ticket/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(ticket)
    })
    if (respostaInicial.status !== 200) {
        console.error("Não foi possível atualizar o ticket.");
        return null;
    }

    return await respostaInicial.json()
}

export const deletarTicket = async (id) => {
    const respostaInicial = await fetch(`${urlBase}/ticket/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    if (respostaInicial.status !== 200) {
        console.error("Não foi possível atualizar o ticket.");
        return null;
      }

    return await respostaInicial.json()
}