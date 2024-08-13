from rest_framework import serializers
from .models import Funcionario, Material, Produto, MaterialProduto


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
        
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ('cod',
                  'valor',
                  'descricao')
        
class MaterialProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaterialProduto
        fields = ('codProduto',
                  'codMaterial',
                  'quantUsa')