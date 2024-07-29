
const API_BASE_URL = 'http://0.0.0.0:8080/funcionario';

export async function fetchFuncionarios() {
	try {
    const response = await fetch(`${API_BASE_URL}/?format=json`);
    if (!response.ok) {
      throw new Error('Erro ao buscar funcionários');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
    throw error;
  }
}

export async function createFuncionario(funcionario) {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar funcionário');
    }

    return await response.json();
  } catch (error) {
		
    console.error('Erro ao criar funcionário:', error);
    throw error;
  }
}

export async function updateFuncionario(cod, funcionario) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario),
    });

    if (!response.ok) {
			
      throw new Error('Erro ao atualizar funcionário');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar funcionário:', error);
    throw error;
  }
}

export async function deleteFuncionario(cod) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar funcionário');
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar funcionário:', error);
    throw error;
  }
}
