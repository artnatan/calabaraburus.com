from django.urls import path

from post.api.comment import CommentsCreateAPI, CommentsListAPI, CommentsUpdateAPI
from post.api.post import (
    PostCreateAPI,
    PostListAPI,
    PostListIsAuthenticatedAPI,
    PostRetrieveAPI,
    PostUpdateAPI,
)

posturls = [
    path("", PostListAPI.as_view()),
    path("update/", PostListIsAuthenticatedAPI.as_view()),
    path("create/", PostCreateAPI.as_view()),
    path("<str:id>/", PostRetrieveAPI.as_view()),
    path("<str:id>/update/", PostUpdateAPI.as_view()),
]

commenturls = [
    path("<str:post_id>/comments/", CommentsListAPI.as_view()),
    path("<str:post_id>/comments/create/", CommentsCreateAPI.as_view()),
    path("<str:post_id>/comments/<str:id>/", CommentsUpdateAPI.as_view()),
    path("<str:post_id>/comments/<str:id>/update/", CommentsUpdateAPI.as_view()),
]

urlpatterns = posturls + commenturls
