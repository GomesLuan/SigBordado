from rest_framework import serializers
from .models import Funcionario


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