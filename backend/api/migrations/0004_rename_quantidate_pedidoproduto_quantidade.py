# Generated by Django 5.1 on 2024-08-18 18:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_pedidoproduto'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pedidoproduto',
            old_name='quantidate',
            new_name='quantidade',
        ),
    ]
