from rest_framework import serializers

from post.models import Comment, Post


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ["post", "user", "prev_comment"]

    def validate(self, attrs: dict) -> dict:

        request = self.context["request"]

        post_id: id = request.parser_context["kwargs"]["post_id"]
        post: Post = Post.objects.get(id=post_id)

        # check for author post
        # if not post.author:
        #     raise ValueError("Unable to comment. Ticket operator must be appointed first.")

        attrs["post"] = post
        # attrs["user"] = request.user

        last_comment = post.comments.last()

        attrs["prev_comment"] = last_comment if last_comment else None

        attrs["user_id"] = request.user.id

        return attrs
