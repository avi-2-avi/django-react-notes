from django.db import models

# Create your models here.
class Note(models.Model):
    tittle = models.CharField(null=True, max_length=50)
    body = models.TextField(null=True, blank=True, max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "notes"
