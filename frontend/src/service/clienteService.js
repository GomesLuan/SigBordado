
const API_BASE_URL = 'http://localhost:8080/cliente';

export async function fetchClientes() {
	try {
    const response = await fetch(`${API_BASE_URL}/?format=json`);
    if (!response.ok) {
      throw new Error('Erro ao buscar clientes');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    throw error;
  }
}

export async function createCliente(cliente) {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar cliente');
    }

    return await response.json();
  } catch (error) {
		
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
}

export async function updateCliente(cod, cliente) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
			
      throw new Error('Erro ao atualizar cliente');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error;
  }
}

export async function deleteCliente(cod) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar cliente');
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    throw error;
  }
}
