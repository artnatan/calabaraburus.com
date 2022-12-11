from django.urls import path

from ware.api.products import ProductListAPI, ProductRetrieveAPI

urlpatterns = [
    path("", ProductListAPI.as_view()),
    path("<str:id>/", ProductRetrieveAPI.as_view()),
]
