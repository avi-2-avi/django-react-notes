from django.contrib import admin

from .models import Note

# Register your models here.
# TODO: Delete later admin permission
admin.site.register(Note)
