from django.urls import path
from .views import FuncionarioView

urlpatterns = [
    path("funcionario/", FuncionarioView.as_view()),
    path("funcionario/<int:pk>/", FuncionarioView.as_view())
]
