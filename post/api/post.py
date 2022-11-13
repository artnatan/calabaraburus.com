from post.serializers.post import PostSerializer, LightPostSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView
from post.models import Post


class PostListAPI(ListAPIView):
    http_method_names = ["get"]
    queryset = Post.objects.all()
    serializer_class = LightPostSerializer


class PostRetrieveAPI(RetrieveAPIView):
    http_method_names = ["get"]
    serializer_class = PostSerializer
    lookup_field = "id"
    lookup_url_kwargs = "id"

    def get_queryset(self):
        post_id = self.kwargs[self.lookup_field]

        return Post.objects.filter(id=post_id)