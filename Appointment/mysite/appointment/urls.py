from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^appointment/ajax/$', views.ajax_return, name='ajax_return'),
]