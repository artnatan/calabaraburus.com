from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from ware.views import index

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("home/", index),
    path("products/", include("ware.urls")),
    path("posts/", include("post.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
