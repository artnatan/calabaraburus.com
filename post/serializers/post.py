from django.contrib.auth import get_user_model
from rest_framework import serializers

from post.models import Post

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    # img = serializers.FileField(write_only = True)

    class Meta:
        model = Post
        fields = "__all__"

    def validate(self, attrs):

        short_desc = self.context["request"].data["description"]
        if len(short_desc) >=250:
            attrs["short_description"] = f"{short_desc[:247]}..."
        else:
            attrs["short_description"] = short_desc

        attrs["author_id"] = self.context["request"].user.id
            
        return attrs


class LightPostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ["id", "theme", "short_description", "author", "img"]




class PostAssignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["author"]

    def validate(self, attrs):
        attrs["author"] = self.context["request"].user
        return attrs