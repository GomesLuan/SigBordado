
const API_BASE_URL = 'http://0.0.0.0:8080/pedido';

export async function fetchPedidos() {
	try {
    const response = await fetch(`${API_BASE_URL}/?format=json`);
    if (!response.ok) {
      throw new Error('Erro ao buscar pedidos');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    throw error;
  }
}

export async function createPedido(pedido) {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar pedido');
    }

    return await response.json();
  } catch (error) {
		
    console.error('Erro ao criar pedido:', error);
    throw error;
  }
}

export async function updatePedido(cod, pedido) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    });

    if (!response.ok) {
			
      throw new Error('Erro ao atualizar pedido');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    throw error;
  }
}

export async function deletePedido(cod) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar pedido');
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar pedido:', error);
    throw error;
  }
}
