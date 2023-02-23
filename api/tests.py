from django.urls import include, path, reverse
from rest_framework import status 
from rest_framework.test import APITestCase, URLPatternsTestCase

class NoteTests(APITestCase, URLPatternsTestCase):
    urlpatters = [
        path('api/', include('api.urls'))
    ]
    def test_list_notes(self):
        """
        Ensure that notes are listed
        """
        url = reverse('notes')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
