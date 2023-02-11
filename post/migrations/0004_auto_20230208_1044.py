# Generated by Django 3.2 on 2023-02-08 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_post_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='img',
            field=models.ImageField(null=True, upload_to='post_images'),
        ),
        migrations.AlterField(
            model_name='post',
            name='short_description',
            field=models.TextField(max_length=250, null=True),
        ),
    ]
