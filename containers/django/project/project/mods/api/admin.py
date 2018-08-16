from django.contrib import admin
from api.models import Point, Revision

# Register your models here.

@admin.register(Point)
class PointAdmin(admin.ModelAdmin):
    pass


@admin.register(Revision)
class RevisionAdmin(admin.ModelAdmin):
    pass