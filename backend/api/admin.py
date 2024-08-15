from django.contrib import admin

from .models import Funcionario, Material, Produto, MaterialProduto, Cliente
models_list = [Material, Funcionario, Produto, MaterialProduto, Cliente]
admin.site.register(models_list)