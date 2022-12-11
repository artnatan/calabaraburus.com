from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView

from post.models import Post
from post.serializers.post import LightPostSerializer, PostSerializer

from rest_framework.permissions import IsAuthenticated, AllowAny


class PostListAPI(ListAPIView):
    http_method_names = ["get"]
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = LightPostSerializer


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
    queryset = Post.objects.all()