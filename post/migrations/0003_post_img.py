# Generated by Django 3.2 on 2023-02-04 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_rename_author_comment_user_rename_name_post_theme'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='img',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
