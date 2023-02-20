from django.http import HttpResponse
from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer

class NoteView(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    # def get(self, request, id):
    #     note = Note.objects.get(id=id)
    #     return HttpResponse(note)

    # def get_all(self, request):
    #     notes = Note.objects.order_by('updated')
    #     return HttpResponse(notes)

    # def post(self, request):
    #     data = request.data
    #     new_note = Note.objects.create(
    #         tittle=data['tittle'],
    #         description=data['description']
    #     )
