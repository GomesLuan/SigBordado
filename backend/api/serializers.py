from rest_framework import serializers
from .models import Funcionario, Material


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