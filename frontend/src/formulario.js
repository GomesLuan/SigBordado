import React, { useState, useEffect } from 'react';

export const FormularioGenerico = ({ modeloClasse, dadosIniciais = {}, handleSubmitCallback}) => {
  const [formData, setFormData] = useState(dadosIniciais);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (dadosIniciais.cod) {
        handleSubmitCallback(dadosIniciais.cod, formData)
      }
      else{
        handleSubmitCallback(formData)

      }

      alert('Salvo com sucesso!');
      // Aqui você pode implementar a navegação ou atualização da lista, como na outra versão
    } catch (error) {
      alert('Erro ao salvar!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {modeloClasse.campos.map((campo, index) => (
        <div key={index}>
          <label>{campo.label}:</label>
          <input
            type={campo.type}
            name={campo.name}
            value={formData[campo.name] ?? ''}
            onChange={handleChange}
            readOnly={campo.readOnly}
          />
        </div>
      ))}
      <button type="submit">{dadosIniciais.cod ? 'Salvar Alterações' : 'Criar'}</button>
    </form>
  );
};

