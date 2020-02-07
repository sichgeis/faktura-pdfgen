from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_name, name='index'),
    path('djangotex/', views.FormView.index, name='djangotex')
]
