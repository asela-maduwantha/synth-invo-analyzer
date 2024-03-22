from django.urls import path, include
from . import views

urlpatterns = [
    path('match/', views.uploadTemplate, name='match-template'),
]
