from django.db import models
from django.conf import settings
from shared.django.models import TimeStampMixin


class Post(TimeStampMixin):
    theme = models.CharField(max_length=100)
    description = models.TextField()
    short_description = models.TextField(max_length=250)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='posts'
    )

    def __str__(self) -> str:
        return f"{self.author} | {self.theme}"
    
    
class Comment(TimeStampMixin):
    text = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='author_posts'
    )
    
    post = models.ForeignKey(
        "Post",
        on_delete=models.CASCADE,
        related_name='comments'
    )

    prev_comment = models.OneToOneField(
        "self",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="next",
    )

    reply_comment = models.ForeignKey(
        "self",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="answers",
    )

    def __str__(self) -> str:
        return str(self.post)