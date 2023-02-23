from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('notes/', views.NoteList.as_view()),
    path('note/<int:id>/', views.NoteDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
