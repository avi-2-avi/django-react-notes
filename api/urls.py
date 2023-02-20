from django.urls import path, include
from .views import NoteView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'notes', NoteView)

urlpatterns = [
    path('', include(router.urls)),
    path('notes/', include('rest_framework.urls', namespace='rest_framework'))
]
