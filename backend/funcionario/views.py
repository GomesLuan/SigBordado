from rest_framework.views import APIView
from .serializers import FuncionarioSerializer
from django.http.response import JsonResponse
from .models import Funcionario
from django.http.response import Http404
from rest_framework.response import Response


class FuncionarioView(APIView):

    def get_funcionario(self, pk):
        try:
            funcionario = Funcionario.objects.get(cod=pk)
            return funcionario
        except:
            return JsonResponse("Funcionario Does Not Exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_funcionario(pk)
            serializer = FuncionarioSerializer(data)
        else:
            data = Funcionario.objects.all()
            serializer = FuncionarioSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = FuncionarioSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Funcionario Created Successfully", safe=False)
        return JsonResponse("Failed to Add Funcionario", safe=False)

    def put(self, request, pk=None):
        funcionario_to_update = Funcionario.objects.get(cod=pk)
        serializer = FuncionarioSerializer(instance=funcionario_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Funcionario Updated Successfully", safe=False)
        return JsonResponse("Failed to Update Funcionario")

    def delete(self, request, pk=None):
        funcionario_to_delete = Funcionario.objects.get(cod=pk)
        funcionario_to_delete.delete()
        return JsonResponse("Funcionario Deleted Successfully", safe=False)





