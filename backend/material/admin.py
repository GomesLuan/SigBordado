from django.contrib import admin
from .models import Material

models_list = [Material]
admin.site.register(models_list)

