
const API_BASE_URL = 'http://0.0.0.0:8080/produto';

export async function fetchProdutos() {
	try {
    const response = await fetch(`${API_BASE_URL}/?format=json`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
}

export async function createProduto(produto) {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar produto');
    }

    return await response.json();
  } catch (error) {
		
    console.error('Erro ao criar produto:', error);
    throw error;
  }
}

export async function updateProduto(cod, produto) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) {
			
      throw new Error('Erro ao atualizar produto');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
}

export async function deleteProduto(cod) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar produto');
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    throw error;
  }
}
