from django.utils.translation import ugettext_lazy as _


POINT_TYPE_EP = 'EP'
POINT_TYPE_KT = 'KT'
POINT_TYPE_CHOICES = (
    (POINT_TYPE_EP, _('Einschaltpunkt')),
    (POINT_TYPE_KT, _('Triangulierungspunkt')),
)