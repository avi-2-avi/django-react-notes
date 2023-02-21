from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('notes/', views.note_list),
    path('note/<int:id>/', views.note_detail),
]

