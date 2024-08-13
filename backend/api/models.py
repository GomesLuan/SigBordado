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