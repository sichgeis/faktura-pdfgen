from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('faktura/api/', include('pdfgen.urls')),
]
