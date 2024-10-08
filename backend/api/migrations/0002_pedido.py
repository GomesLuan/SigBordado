# Generated by Django 5.1 on 2024-08-18 17:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('cod', models.AutoField(primary_key=True, serialize=False)),
                ('forneceMaterial', models.BooleanField(default=False)),
                ('observacoes', models.CharField(max_length=250)),
                ('status', models.CharField(max_length=1)),
                ('valorAdicional', models.FloatField()),
                ('desconto', models.FloatField()),
                ('formaPagamento', models.CharField(max_length=100)),
                ('codCliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.cliente')),
                ('codFuncionario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.funcionario')),
            ],
        ),
    ]
