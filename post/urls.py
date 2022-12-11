from django.urls import path

from post.api.comment import CommentsCreateAPI, CommentsListAPI
from post.api.post import PostListAPI, PostRetrieveAPI, PostCreateAPI

posturls = [
    path("", PostListAPI.as_view()),
    path("create/", PostCreateAPI.as_view()),
    path("<str:id>/", PostRetrieveAPI.as_view()),
    
]

commenturls = [
    path("<str:post_id>/comments/", CommentsListAPI.as_view()),
    path("<str:post_id>/comments/create", CommentsCreateAPI.as_view()),
]

urlpatterns = posturls + commenturls
