# Generated by Django 2.1 on 2018-08-20 11:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Point',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('EP', 'Einschaltpunkt'), ('KT', 'Triangulierungspunkt')], max_length=2)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='points', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Punkt',
                'verbose_name_plural': 'Punkte',
                'ordering': ('created',),
            },
        ),
        migrations.CreateModel(
            name='Revision',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('revisioned', models.DateTimeField(default=django.utils.timezone.now)),
                ('point', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='revisions', to='api.Point')),
            ],
            options={
                'verbose_name': 'Revision',
                'verbose_name_plural': 'Revisionen',
                'ordering': ('created',),
            },
        ),
    ]
