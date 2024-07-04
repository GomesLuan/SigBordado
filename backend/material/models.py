from django.db import models

# Create your models here.


class Material(models.Model):
    cod = models.AutoField(primary_key=True)
    descricao = models.CharField(max_length=250)
    quantEst = models.IntegerField()

    def __str__(self):
        return self.descricao