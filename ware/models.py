from django.conf import settings
from django.db import models

from shared.django.models import TimeStampMixin


class Product(TimeStampMixin):
    name = models.CharField(max_length=100)
    description = models.TextField()
    short_description = models.TextField(max_length=250, null=True)
    image_link = models.TextField(max_length=400, null=True)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="products",
    )

    def __str__(self) -> str:
        return self.name
