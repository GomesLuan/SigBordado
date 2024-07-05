from django.contrib import admin
from .models import Funcionario, Material

models_list = [Material, Funcionario]
admin.site.register(models_list)