from django.db import models

# Create your models here.

class Cliente(models.Model):
    cod = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=150)
    cpfCnpj = models.CharField(max_length=14, unique=True)
    email = models.EmailField(max_length=150)
    telefone = models.CharField(max_length=20)
    endereco = models.CharField(max_length=250)
    
    def __str__(self):
        return self.nome

class Funcionario(models.Model):
    cod = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=150)
    cpf = models.CharField(max_length=11)
    senha = models.CharField(max_length=50)
    rg = models.CharField(max_length=10)
    email = models.CharField(max_length=150)
    telefone = models.CharField(max_length=20)
    endereco = models.CharField(max_length=250) 

    def __str__(self):
        return self.nome
    
class Material(models.Model):
    cod = models.AutoField(primary_key=True)
    descricao = models.CharField(max_length=250)
    quantEst = models.IntegerField()

    def __str__(self):
        return self.descricao
    
class Produto(models.Model):
    cod = models.AutoField(primary_key=True)
    valor = models.FloatField()
    descricao = models.CharField(max_length=250)

    def __str__(self):
        return self.descricao

class MaterialProduto(models.Model):
    codProduto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    codMaterial = models.ForeignKey(Material, on_delete=models.CASCADE)
    quantUsa = models.FloatField()

    class Meta:
        unique_together = (('codProduto', 'codMaterial'))

    def __str__(self):
        return f'{self.codProduto.descricao} - {self.codMaterial.descricao} ({self.quantUsa})'

class Pedido(models.Model):
    cod = models.AutoField(primary_key=True)
    codCliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    codFuncionario = models.ForeignKey(Funcionario, on_delete=models.CASCADE)
    forneceMaterial = models.BooleanField(default=False)
    observacoes = models.CharField(max_length=250)
    status = models.CharField(max_length=1)
    valorAdicional = models.FloatField()
    desconto = models.FloatField()
    formaPagamento = models.CharField(max_length=100)

    def __str__(self):
        return str(self.cod)
    
class PedidoProduto(models.Model):
    codPedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    codProduto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()

    class Meta:
        unique_together = (('codPedido', 'codProduto'))

    def __str__(self):
        return f'{self.codPedido} - {self.codProduto.descricao} ({self.quantidade})'