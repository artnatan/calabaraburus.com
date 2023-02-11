from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
)

from post.models import Comment, Post
from post.serializers.comment import CommentSerializer

from rest_framework.permissions import IsAuthenticated, AllowAny


class CommentsListAPI(ListAPIView):
    http_method_names = ["get"]
    permission_classes = [AllowAny]
    serializer_class = CommentSerializer
    lookup_field = "post_id"
    lookup_url_kwargs = "post_id"
    # queryset = Comment.objects.all()

    def get_queryset(self):
        post_id = self.kwargs[self.lookup_field]
        # post: Post = Post.objects.get(id=post_id)

        return Comment.objects.filter(post_id=post_id)


class CommentsCreateAPI(CreateAPIView):
    http_method_names = ["post"]
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class CommentsUpdateAPI(RetrieveUpdateDestroyAPIView):
    http_method_names = ["get", "patch", "delete"]
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_field = "id"
    lookup_url_kwargs = "id"

    def get_queryset(self):
        # if self.request.method=="GET":
        comment_id = self.kwargs[self.lookup_field]
        return Comment.objects.filter(id=comment_id)
