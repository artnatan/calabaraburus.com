from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import AllowAny, IsAuthenticated

from post.models import Post
from post.serializers.post import LightPostSerializer, PostSerializer


class PostListAPI(ListAPIView):
    http_method_names = ["get"]
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = LightPostSerializer


class PostListIsAuthenticatedAPI(ListAPIView):
    http_method_names = ["get"]
    permission_classes = [AllowAny]
    serializer_class = LightPostSerializer
    lookup_field = "id"
    lookup_url_kwargs = "id"

    def get_queryset(self):
        user = self.request.user
        if not user.is_anonymous:
            return Post.objects.filter(author=user)


class PostRetrieveAPI(RetrieveAPIView):
    http_method_names = ["get"]
    permission_classes = [AllowAny]
    serializer_class = PostSerializer
    lookup_field = "id"
    lookup_url_kwargs = "id"

    def get_queryset(self):
        post_id = self.kwargs[self.lookup_field]

        return Post.objects.filter(id=post_id)


class PostCreateAPI(CreateAPIView):
    http_method_names = ["post"]
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    parser_classes = [MultiPartParser, FormParser]
    queryset = Post.objects.all()


class PostUpdateAPI(RetrieveUpdateDestroyAPIView):
    http_method_names = ["get", "patch", "delete"]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = "id"
    lookup_url_kwargs = "id"

    def get_queryset(self):
        post_id = self.kwargs[self.lookup_field]
        return Post.objects.filter(id=post_id)


# class PostAssignAPI(UpdateAPIView):
#     http_method_names = ["patch"]
#     serializer_class = PostAssignSerializer
#     permission_classes = [IsAuthenticated]
#     lookup_field = "id"
#     lookup_url_kwargs = "id"

#     def get_queryset(self):
#         return Post.objects.filter(author=None)
