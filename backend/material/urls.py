from django.urls import path
from .views import MaterialView

urlpatterns = [
    path("material/", MaterialView.as_view()),
    path("material/<int:pk>/", MaterialView.as_view())
]
