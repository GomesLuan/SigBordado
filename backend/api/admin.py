from django.contrib import admin

from .models import Funcionario, Material, Produto, MaterialProduto, Cliente, Pedido, PedidoProduto
models_list = [Material, Funcionario, Produto, MaterialProduto, Cliente, Pedido, PedidoProduto]
admin.site.register(models_list)