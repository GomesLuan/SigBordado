
const API_BASE_URL = 'http://0.0.0.0:8080/material';

export async function fetchMateriais() {
	try {
    const response = await fetch(`${API_BASE_URL}/?format=json`);
    if (!response.ok) {
      throw new Error('Erro ao buscar materiais');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar materials:', error);
    throw error;
  }
}

export async function createMaterial(material) {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(material),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar material');
    }

    return await response.json();
  } catch (error) {
		
    console.error('Erro ao criar material:', error);
    throw error;
  }
}

export async function updateMaterial(cod, material) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(material),
    });

    if (!response.ok) {
			
      throw new Error('Erro ao atualizar material');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar material:', error);
    throw error;
  }
}

export async function deleteMaterial(cod) {
  try {
    const response = await fetch(`${API_BASE_URL}/${cod}/`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar material');
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar material:', error);
    throw error;
  }
}
