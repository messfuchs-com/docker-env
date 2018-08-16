from django.shortcuts import render

from api.models import Point
from api.serializers import PointSerializer, User, UserSerializer, Revision, RevisionSerializer
from rest_framework import viewsets, permissions, authentication

# Create your views here.

class PointViewSet(viewsets.ModelViewSet):
    """
    This viewset does a lot
    """
    queryset = Point.objects.all()
    serializer_class = PointSerializer
    permission_classes = (permissions.IsAuthenticated,)
    # authentication_classes = (authentication.TokenAuthentication, authentication.SessionAuthentication)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RevisionViewSet(viewsets.ModelViewSet):
    """
    This viewset ist for Revisions
    """
    queryset = Revision.objects.all()
    serializer_class = RevisionSerializer
    permission_classes = (permissions.IsAuthenticated,)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    just list and detail
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer