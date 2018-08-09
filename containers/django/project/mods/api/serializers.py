from rest_framework import serializers
from api.models import Point
from django.contrib.auth.models import User


class PointSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Point
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    points = serializers.PrimaryKeyRelatedField(many=True, queryset=Point.objects.all())

    class Meta:
        model = User
        fields = '__all__'