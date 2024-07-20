from django.test import TestCase
from django import setup
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
setup()

from .models import Material

class MaterialModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Material.objects.create(descricao='Tecido Madeira', quantEst=10)

    def test_descricao_label(self):
        material = Material.objects.get(cod=1)
        field_label = material._meta.get_field('descricao').verbose_name
        self.assertEqual(field_label, 'descricao')

    def test_quantEst_label(self):
        material = Material.objects.get(cod=1)
        field_label = material._meta.get_field('quantEst').verbose_name
        self.assertEqual(field_label, 'quantEst')

    def test_descricao_max_length(self):
        material = Material.objects.get(cod=1)
        max_length = material._meta.get_field('descricao').max_length
        self.assertEqual(max_length, 250)

    def test_quantEst_value(self):
        material = Material.objects.get(cod=1)
        self.assertEqual(material.quantEst, 10)

    def test_field_existence(self):
        material = Material.objects.get(cod=1)
        self.assertTrue(hasattr(material, 'cod'))
        self.assertTrue(hasattr(material, 'descricao'))
        self.assertTrue(hasattr(material, 'quantEst'))
