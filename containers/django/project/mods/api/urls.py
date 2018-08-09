from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'points', views.PointViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]