from rest_framework.views import APIView
from rest_framework import status
from .serializers import FuncionarioSerializer, MaterialSerializer, ClienteSerializer
from django.http import JsonResponse
from .models import Funcionario, Material, Cliente
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
        except Material.DoesNotExist:
            return None

    def get(self, request, pk=None):
        if pk:
            material = self.get_material(pk)
            if material is None:
                return Response({"detail": "Material does not exist"}, status=status.HTTP_404_NOT_FOUND)
            serializer = MaterialSerializer(material)
        else:
            materials = Material.objects.all()
            serializer = MaterialSerializer(materials, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = MaterialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Material created successfully"}, status=status.HTTP_201_CREATED)
        return Response({"detail": "Failed to add material", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        material = self.get_material(pk)
        if material is None:
            return Response({"detail": "Material does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = MaterialSerializer(instance=material, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Material updated successfully"}, status=status.HTTP_200_OK)
        return Response({"detail": "Failed to update material", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        material = self.get_material(pk)
        if material is None:
            return Response({"detail": "Material does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        material.delete()
        return Response({"detail": "Material deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

class ClienteView(APIView):

    def get_cliente(self, pk):
        try:
            cliente = Cliente.objects.get(cod=pk)
            return cliente
        except Cliente.DoesNotExist:
            return None

    def get(self, request, pk=None):
        if pk:
            cliente = self.get_cliente(pk)
            if cliente is None:
                return Response({"detail": "Cliente does not exist"}, status=status.HTTP_404_NOT_FOUND)
            serializer = ClienteSerializer(cliente)
        else:
            clientes = Cliente.objects.all()
            serializer = ClienteSerializer(clientes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Cliente created successfully"}, status=status.HTTP_201_CREATED)
        return Response({"detail": "Failed to add cliente", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        cliente = self.get_cliente(pk)
        if cliente is None:
            return Response({"detail": "Cliente does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ClienteSerializer(instance=cliente, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"detail": "Cliente updated successfully"}, status=status.HTTP_200_OK)
        return Response({"detail": "Failed to update cliente", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        cliente = self.get_cliente(pk)
        if cliente is None:
            return Response({"detail": "Cliente does not exist"}, status=status.HTTP_404_NOT_FOUND)
        
        cliente.delete()
        return Response({"detail": "Cliente deleted successfully"}, status=status.HTTP_204_NO_CONTENT)