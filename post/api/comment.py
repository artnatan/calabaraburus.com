from post.serializers.comment import CommentSerializer
from rest_framework.generics import ListAPIView, CreateAPIView
from post.models import Comment


class CommentsListAPI(ListAPIView):
    http_method_names = ["get"]
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    # lookup_field = "ticket_id"
    # lookup_url_kwargs = "ticket_id"

    # def get_queryset(self):
    #     post_id = self.kwargs[self.lookup_field]
    #     post: Post = Post.objects.get(id=post_id)

    #     # only the user of the ticket can see the comments
    #     if post.author == self.request.user or post.client == self.request.user:
    #         return Comment.objects.filter(post_id=post_id)
    #     raise ValueError("You are not a ticket operator or a ticket client")


class CommentsCreateAPI(CreateAPIView):
    http_method_names = ["post"]
    serializer_class = CommentSerializer
    lookup_field = "post_id"
    lookup_url_kwargs = "post_id"

    def get_queryset(self):
        post_id = self.kwargs[self.lookup_field]

        return Comment.objects.filter(post_id=post_id)
