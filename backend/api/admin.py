from django.contrib import admin
from .models import Funcionario, Material, Produto, MaterialProduto

models_list = [Material, Funcionario, Produto, MaterialProduto]
admin.site.register(models_list)