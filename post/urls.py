from django.urls import path

from post.api.post import PostListAPI, PostRetrieveAPI
from post.api.comment import CommentsListAPI, CommentsCreateAPI

posturls = [
    path("", PostListAPI.as_view()),
    path("<int:id>/", PostRetrieveAPI.as_view())
]

commenturls = [
    path("<int:post_id>/comments/", CommentsListAPI.as_view()),
    path("<int:post_id>/comments/create", CommentsCreateAPI.as_view()),
]

urlpatterns = posturls + commenturls