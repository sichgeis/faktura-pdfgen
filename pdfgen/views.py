from django.http import HttpResponse
from django_tex.shortcuts import render_to_pdf


def index(request):
    template_name = 'invoice-test.tex'
    context = {'foo': 'ß'}
    return render_to_pdf(request, template_name, context, filename='invoice-test.pdf', )
