from rest_framework.views import APIView
from rest_framework import status
from .serializers import FuncionarioSerializer, MaterialSerializer
from django.http import JsonResponse
from .models import Funcionario, Material
from django.http import Http404
from rest_framework.response import Response


class FuncionarioView(APIView):

    def get_funcionario(self, pk):
        try:
            return Funcionario.objects.get(cod=pk)
        except Funcionario.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            funcionario = self.get_funcionario(pk)
            serializer = FuncionarioSerializer(funcionario)
        else:
            funcionarios = Funcionario.objects.all()
            serializer = FuncionarioSerializer(funcionarios, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FuncionarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Funcionario Created Successfully", safe=False, status=status.HTTP_201_CREATED)
        return JsonResponse("Failed to Add Funcionario", safe=False, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        funcionario_to_update = self.get_funcionario(pk)
        serializer = FuncionarioSerializer(instance=funcionario_to_update, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Funcionario Updated Successfully", safe=False, status=status.HTTP_200_OK)
        return JsonResponse("Failed to Update Funcionario", safe=False, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        funcionario_to_delete = self.get_funcionario(pk)
        funcionario_to_delete.delete()
        return JsonResponse("Funcionario Deleted Successfully", safe=False, status=status.HTTP_204_NO_CONTENT)
    
class MaterialView(APIView):

    def get_material(self, pk):
        try:
            material = Material.objects.get(cod=pk)
            return material
        except:
            return JsonResponse("Material Does Not Exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_material(pk)
            serializer = MaterialSerializer(data)
        else:
            data = Material.objects.all()
            serializer = MaterialSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = MaterialSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Material Created Successfully", safe=False)
        return JsonResponse("Failed to Add Material", safe=False)

    def put(self, request, pk=None):
        material_to_update = Material.objects.get(cod=pk)
        serializer = MaterialSerializer(instance=material_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Material Updated Successfully", safe=False)
        return JsonResponse("Failed to Update Material")

    def delete(self, request, pk=None):
        material_to_delete = Material.objects.get(cod=pk)
        material_to_delete.delete()
        return JsonResponse("Material Deleted Successfully", safe=False)




