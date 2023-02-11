from django.contrib.auth import get_user_model
from rest_framework import serializers

from ware.models import Product

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]


class ProductSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Product
        fields = "__all__"


class LightProductSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Product
        fields = ["id", "name", "short_description", "author", "image_link"]
