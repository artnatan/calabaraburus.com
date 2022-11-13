from turtle import home
from django.contrib import admin
from django.urls import path, include
from ware.views import index

urlpatterns = [
    path("admin/", admin.site.urls),
    path("home/", index),
    path("products/", include("ware.urls")),
    path("posts/", include("post.urls")),
]
