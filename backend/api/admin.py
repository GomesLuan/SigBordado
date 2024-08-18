from django.contrib import admin

from .models import Funcionario, Material, Produto, MaterialProduto, Cliente, Pedido
models_list = [Material, Funcionario, Produto, MaterialProduto, Cliente, Pedido]
admin.site.register(models_list)