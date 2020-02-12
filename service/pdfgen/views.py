from django.http import HttpResponse
from django_tex.shortcuts import render_to_pdf

from .forms import NameForm


def get_name(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            template_name = 'invoice-test.tex'
            context = {
                'company_name': form.cleaned_data['company_name'],
                'sender_name': form.cleaned_data['sender_name'],
                'sender_street': form.cleaned_data['sender_street'],
                'sender_city': form.cleaned_data['sender_city'],
                'sender_tele': form.cleaned_data['sender_tele'],
                'sender_email': form.cleaned_data['sender_email'],
                'rec_name': form.cleaned_data['rec_name'],
                'rec_company': form.cleaned_data['rec_company'],
                'rec_street': form.cleaned_data['rec_street'],
                'rec_city': form.cleaned_data['rec_city'],
                'inv_id': form.cleaned_data['inv_id'],
                'inv_date': form.cleaned_data['inv_date'],
                'txt_salutation': form.cleaned_data['txt_salutation'],
                'txt_preamble': form.cleaned_data['txt_preamble'],
                'txt_closing': form.cleaned_data['txt_closing'],
                'tax_id': form.cleaned_data['tax_id'],
                'bank_name': form.cleaned_data['bank_name'],
                'bank_iban': form.cleaned_data['bank_iban'],
                'bank_bic': form.cleaned_data['bank_bic'],
                'expenses': form.cleaned_data['expenses'],
            }

            return render_to_pdf(request, template_name, context, filename='invoice-test.pdf', )
        else:
            return HttpResponse('Form validation failed', status=412)


    return HttpResponse('Only POST is allowed to submit the form', status=405)
