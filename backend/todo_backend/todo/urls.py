from .views import BookView
from django.urls import path

urlpatterns = [
    path('books/', BookView.as_view()),
    path('books/<int:id>/', BookView.as_view()),
]