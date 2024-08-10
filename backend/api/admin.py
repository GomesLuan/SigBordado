from django.contrib import admin
from .models import Funcionario, Material, Cliente

models_list = [Material, Funcionario, Cliente]
admin.site.register(models_list)