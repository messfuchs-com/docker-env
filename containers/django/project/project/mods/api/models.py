from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from common.constants import POINT_TYPE_CHOICES

# Create your models here.

class Point(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    owner = models.ForeignKey('auth.User', related_name='points', on_delete=models.CASCADE)
    category = models.CharField(max_length=2, choices=POINT_TYPE_CHOICES)

    class Meta:
        ordering = ('created', )
        verbose_name = _('Punkt')
        verbose_name_plural = _('Punkte')

    def __str__(self):
        return "{}".format(self.name)


class Revision(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    revisioned = models.DateTimeField(default=timezone.now)
    point = models.ForeignKey(Point, related_name='revisions', on_delete=models.CASCADE)

    class Meta:
        ordering = ('created', )
        verbose_name = _('Revision')
        verbose_name_plural = _('Revisionen')

    def __str__(self):
        return "{}/{}".format(self.point, self.revisioned)