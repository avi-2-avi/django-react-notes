from rest_framework.views import APIView
from .serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework import status 
from django.http import Http404
from .models import Note

class NoteList(APIView):
    """
    GET: List all notes
    POST: Create a new note
    """
    def get(self, request, format=None):
        notes = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NoteDetail(APIView):
    """
    GET: Get a note by id
    PUT: Update a note by id
    DELETE: Delete a note by id
    """
    def get_object(self, id):
        try:
            return Note.objects.get(id=id)
        except Note.DoesNotExit:
            raise Http404

    def get(self, request, id, format=None):
        note = self.get_object(id)
        serializer = NoteSerializer(note)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        note = self.get_object(id)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id, format=None):
        note = self.get_object(id)
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
