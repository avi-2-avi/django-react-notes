from rest_framework.decorators import api_view 
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Note
from .serializers import NoteSerializer

# class NoteView(viewsets.ModelViewSet):
#     queryset = Note.objects.all()
#     serializer_class = NoteSerializer

    
    # def get(self, request, id):
    #     note = Note.objects.get(id=id)
    #     return views.Response(note)

    # def get_all(self, request):
    #     notes = Note.objects.order_by('updated')
    #     return HttpResponse(notes)

    # def post(self, request):
    #     data = request.data
    #     new_note = Note.objects.create(
    #         tittle=data['tittle'],
    #         description=data['description']
    #     )

@csrf_exempt
def note_list(request):
    if request.method == 'GET':
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def note_detail(request, id, format=None):
    if request.method == 'GET':
        note = Note.objects.get(id=id)
        serializer = NoteSerializer(note)
        return JsonResponse(serializer.data)
