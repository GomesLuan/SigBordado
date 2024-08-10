from django.urls import path
from .views import FuncionarioView, MaterialView, ClienteView

urlpatterns = [
    path("funcionario/", FuncionarioView.as_view()),
    path("funcionario/<int:pk>/", FuncionarioView.as_view()),
    path("material/", MaterialView.as_view()),
    path("material/<int:pk>/", MaterialView.as_view()),
    path("cliente/", ClienteView.as_view()),
    path("cliente/<int:pk>/", ClienteView.as_view())
]