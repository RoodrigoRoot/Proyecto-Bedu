# Generated by Django 2.2.7 on 2019-11-23 14:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('body', models.TextField(default='Un amigo esta planeando una carnita asada, te apuntas?', verbose_name='Cuerpo')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=10, verbose_name='Telefono')),
                ('location', models.CharField(choices=[('Guadalajara', 'Guadalajara'), ('Guadalajara', 'Zapopan'), ('Guadalajara', 'Tlaquepaque'), ('Guadalajara', 'Tlajomulco')], max_length=15, verbose_name='Ubiación')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Perfile',
            },
        ),
    ]
