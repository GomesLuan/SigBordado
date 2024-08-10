from rest_framework import serializers
from .models import Funcionario, Material, Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('cod', 
                  'nome', 
                  'cpfCnpj', 
                  'email', 
                  'telefone', 
                  'endereco')

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ('cod',
                  'nome',
                  'cpf',
                  'senha',
                  'rg',
                  'email',
                  'telefone',
                  'endereco') 
        
class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('cod',
                  'descricao',
                  'quantEst')