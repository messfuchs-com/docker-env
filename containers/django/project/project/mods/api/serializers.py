from rest_framework import serializers
from api.models import Point, Revision
from django.contrib.auth.models import User
from django.utils import timezone

class PointSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    revisions = serializers.PrimaryKeyRelatedField(many=True, queryset=Revision.objects.all())


    class Meta:
        model = Point
        fields = '__all__'


class RevisionSerializer(serializers.ModelSerializer):
    revisioned = serializers.DateTimeField(default=timezone.now, initial=timezone.now)

    class Meta:
        model = Revision
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    points = serializers.PrimaryKeyRelatedField(many=True, queryset=Point.objects.all())

    class Meta:
        model = User
        fields = '__all__'