# Generated by Django 3.2 on 2023-02-08 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ware', '0003_product_image_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='img',
            field=models.ImageField(null=True, upload_to='project_images'),
        ),
    ]
