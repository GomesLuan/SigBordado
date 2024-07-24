from django.test import TestCase, RequestFactory
from rest_framework import status
from rest_framework.response import Response
from rest_framework.test import APITestCase, APIRequestFactory
from rest_framework.views import APIView
from .models import Funcionario
from .models import Material
from .serializers import FuncionarioSerializer
from .serializers import MaterialSerializer
from .views import FuncionarioView
from .views import MaterialView

class FuncionarioModelTest(TestCase):

    def setUp(self):
        # Criação de um objeto Funcionario para usar nos testes
        self.funcionario = Funcionario.objects.create(
            nome='João Silva',
            cpf='12345678901',
            senha='senha123',
            rg='1234567890',
            email='joao.silva@example.com',
            telefone='1234567890',
            endereco='Rua Exemplo, 123'
        )

    def testFuncionarioCreation(self):
        # Verifica se o objeto Funcionario foi criado corretamente
        funcionario = Funcionario.objects.get(cod=self.funcionario.cod)
        self.assertEqual(funcionario.nome, 'João Silva')
        self.assertEqual(funcionario.cpf, '12345678901')
        self.assertEqual(funcionario.senha, 'senha123')
        self.assertEqual(funcionario.rg, '1234567890')
        self.assertEqual(funcionario.email, 'joao.silva@example.com')
        self.assertEqual(funcionario.telefone, '1234567890')
        self.assertEqual(funcionario.endereco, 'Rua Exemplo, 123')

    def testStrMethod(self):
        # Verifica o método __str__ do modelo (se existir)
        funcionario = Funcionario.objects.get(cod=self.funcionario.cod)
        self.assertEqual(str(funcionario), funcionario.nome)

class FuncionarioSerializerTest(TestCase):

    def setUp(self):
        self.funcionario_attributes = {
            'nome': 'João Silva',
            'cpf': '12345678901',
            'senha': 'senha123',
            'rg': '1234567890',
            'email': 'joao.silva@example.com',
            'telefone': '1234567890',
            'endereco': 'Rua Exemplo, 123'
        }

        self.funcionario = Funcionario.objects.create(**self.funcionario_attributes)
        self.serializer = FuncionarioSerializer(instance=self.funcionario)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(['cod', 'nome', 'cpf', 'senha', 'rg', 'email', 'telefone', 'endereco']))

    def test_nome_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['nome'], self.funcionario_attributes['nome'])

    def test_cpf_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['cpf'], self.funcionario_attributes['cpf'])

    def test_senha_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['senha'], self.funcionario_attributes['senha'])

    def test_rg_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['rg'], self.funcionario_attributes['rg'])

    def test_email_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['email'], self.funcionario_attributes['email'])

    def test_telefone_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['telefone'], self.funcionario_attributes['telefone'])

    def test_endereco_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['endereco'], self.funcionario_attributes['endereco'])

    def test_create_funcionario(self):
        data = {
            'nome': 'Maria Souza',
            'cpf': '09876543210',
            'senha': 'senha456',
            'rg': '0987654321',
            'email': 'maria.souza@example.com',
            'telefone': '0987654321',
            'endereco': 'Rua Teste, 456'
        }
        serializer = FuncionarioSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        funcionario = serializer.save()
        self.assertEqual(Funcionario.objects.count(), 2)
        self.assertEqual(funcionario.nome, data['nome'])
        self.assertEqual(funcionario.cpf, data['cpf'])
        self.assertEqual(funcionario.senha, data['senha'])
        self.assertEqual(funcionario.rg, data['rg'])
        self.assertEqual(funcionario.email, data['email'])
        self.assertEqual(funcionario.telefone, data['telefone'])
        self.assertEqual(funcionario.endereco, data['endereco'])

class FuncionarioViewTest(TestCase):

    def setUp(self):
        self.factory = RequestFactory()
        self.view = FuncionarioView.as_view()
        self.funcionario_attributes = {
            'nome': 'João Silva',
            'cpf': '12345678901',
            'senha': 'senha123',
            'rg': '1234567890',
            'email': 'joao.silva@example.com',
            'telefone': '1234567890',
            'endereco': 'Rua Exemplo, 123'
        }
        self.funcionario = Funcionario.objects.create(**self.funcionario_attributes)
        self.valid_payload = {
            'nome': 'Maria Souza',
            'cpf': '09876543210',
            'senha': 'senha456',
            'rg': '0987654321',
            'email': 'maria.souza@example.com',
            'telefone': '0987654321',
            'endereco': 'Rua Teste, 456'
        }
        self.invalid_payload = {
            'nome': '',
            'cpf': '09876543210',
            'senha': 'senha456',
            'rg': '0987654321',
            'email': 'maria.souza@example.com',
            'telefone': '0987654321',
            'endereco': 'Rua Teste, 456'
        }

    def test_get_all_funcionarios(self):
        request = self.factory.get('/funcionarios/')
        response = self.view(request)
        funcionarios = Funcionario.objects.all()
        serializer = FuncionarioSerializer(funcionarios, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_valid_single_funcionario(self):
        request = self.factory.get(f'/funcionarios/{self.funcionario.cod}/')
        response = self.view(request, pk=self.funcionario.cod)
        funcionario = Funcionario.objects.get(cod=self.funcionario.cod)
        serializer = FuncionarioSerializer(funcionario)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_invalid_single_funcionario(self):
        request = self.factory.get('/funcionarios/999/')
        response = self.view(request, pk=999)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_valid_funcionario(self):
        request = self.factory.post('/funcionarios/', data=self.valid_payload, content_type='application/json')
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_funcionario(self):
        request = self.factory.post('/funcionarios/', data=self.invalid_payload, content_type='application/json')
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_valid_update_funcionario(self):
        request = self.factory.put(f'/funcionarios/{self.funcionario.cod}/', data=self.valid_payload, content_type='application/json')
        response = self.view(request, pk=self.funcionario.cod)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_update_funcionario(self):
        request = self.factory.put(f'/funcionarios/{self.funcionario.cod}/', data=self.invalid_payload, content_type='application/json')
        response = self.view(request, pk=self.funcionario.cod)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_valid_delete_funcionario(self):
        request = self.factory.delete(f'/funcionarios/{self.funcionario.cod}/')
        response = self.view(request, pk=self.funcionario.cod)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_invalid_delete_funcionario(self):
        request = self.factory.delete('/funcionarios/999/')
        response = self.view(request, pk=999)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

class MaterialModelTest(TestCase):
    def setUp(self):
        self.material = Material.objects.create(
            descricao='Tecido Marrom',
            quantEst=100
        )

    def test_material_creation(self):
        material = Material.objects.get(cod=self.material.cod)
        self.assertEqual(material.descricao, 'Tecido Marrom')
        self.assertEqual(material.quantEst, 100)

    def test_str_method(self):
        self.assertEqual(str(self.material), 'Tecido Marrom')

class MaterialSerializerTest(TestCase):
    def setUp(self):
        self.material_attributes = {
            'descricao': 'Tecido Marrom',
            'quantEst': 100
        }
        self.material = Material.objects.create(**self.material_attributes)
        self.serializer = MaterialSerializer(instance=self.material)

    def test_contains_expected_fields(self):
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(['cod', 'descricao', 'quantEst']))

    def test_descricao_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['descricao'], self.material_attributes['descricao'])

    def test_quantEst_field_content(self):
        data = self.serializer.data
        self.assertEqual(data['quantEst'], self.material_attributes['quantEst'])

    def test_create_material(self):
        data = {
            'descricao': 'Tecido Preto',
            'quantEst': 200
        }
        serializer = MaterialSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        material = serializer.save()
        self.assertEqual(Material.objects.count(), 2)
        self.assertEqual(material.descricao, data['descricao'])
        self.assertEqual(material.quantEst, data['quantEst'])

class MaterialViewTest(TestCase):

    def setUp(self):
        self.factory = RequestFactory()
        self.view = MaterialView.as_view()
        self.material_attributes = {
            'descricao': 'Algodão',
            'quantEst': 100
        }
        self.material = Material.objects.create(**self.material_attributes)
        self.valid_payload = {
            'descricao': 'Linho',
            'quantEst': 50
        }
        self.invalid_payload = {
            'descricao': '',
            'quantEst': 50
        }

    def test_get_all_materials(self):
        request = self.factory.get('/material/')
        response = self.view(request)
        materials = Material.objects.all()
        serializer = MaterialSerializer(materials, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_valid_single_material(self):
        request = self.factory.get(f'/material/{self.material.cod}/')
        response = self.view(request, pk=self.material.cod)
        material = Material.objects.get(cod=self.material.cod)
        serializer = MaterialSerializer(material)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_invalid_single_material(self):
        request = self.factory.get('/material/999/')
        response = self.view(request, pk=999)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_valid_material(self):
        request = self.factory.post('/material/', data=self.valid_payload, content_type='application/json')
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_material(self):
        request = self.factory.post('/material/', data=self.invalid_payload, content_type='application/json')
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_valid_update_material(self):
        request = self.factory.put(f'/material/{self.material.cod}/', data=self.valid_payload, content_type='application/json')
        response = self.view(request, pk=self.material.cod)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_update_material(self):
        request = self.factory.put(f'/material/{self.material.cod}/', data=self.invalid_payload, content_type='application/json')
        response = self.view(request, pk=self.material.cod)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_valid_delete_material(self):
        request = self.factory.delete(f'/material/{self.material.cod}/')
        response = self.view(request, pk=self.material.cod)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_invalid_delete_material(self):
        request = self.factory.delete('/material/999/')
        response = self.view(request, pk=999)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
