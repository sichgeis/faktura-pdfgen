from django import forms


class NameForm(forms.Form):
    company_name = forms.CharField(label='Company name', max_length=100, initial="Accelerantoronics")
    sender_name = forms.CharField(label='Your Name', max_length=100, initial="Alfred Neuman")
    sender_street = forms.CharField(label='Street and number', max_length=100, initial="Marienplatz 42")
    sender_city = forms.CharField(label='Zip code and city', max_length=100, initial="82917 München")
    sender_tele = forms.CharField(label='Telephone number', max_length=100, initial="+00 000 0000 0000")
    sender_email = forms.CharField(label='Email address', max_length=100, initial="demo@example.invalid")
    rec_name = forms.CharField(label='Recipient name', max_length=100, initial="Ada Lovelace")
    rec_company = forms.CharField(label='Company name', max_length=100, initial="Impactful Things")
    rec_street = forms.CharField(label='Street and number', max_length=100, initial="Squared Circle 13")
    rec_city = forms.CharField(label='Zip code and city', max_length=100, initial="A1 9CD London")
    inv_id = forms.CharField(label='Invoice id', max_length=100, initial="1062")
    inv_date = forms.CharField(label='Invoice date', max_length=100, initial="31.9.2020")
    txt_salutation = forms.CharField(label='Salutation', max_length=100, initial="Sehr geehrtes Impactful Things Team")
    txt_preamble = forms.CharField(label='Preamble', max_length=1000,
                                   initial="für den Monat Januar 2020 erlaube ich mir die folgenden Leistungen in Rechnung zu stellen:")
    txt_closing = forms.CharField(label='Closing', max_length=1000,
                                  initial="Gemäß §19 UStG ist in dem ausgewiesenen Betrag auf dieser Rechnung keine Umsatzsteuer enthalten. Ich bitte um Überweisung innerhalb der nächsten 30 Tage auf das unten genannte Konto.")
    tax_id = forms.CharField(label='Tax id', max_length=100, initial="000/0000/000")
    bank_name = forms.CharField(label='Name', max_length=100, initial="Example Bank")
    bank_iban = forms.CharField(label='IBAN', max_length=100, initial="DE00 0000 0000 0000 0000 00")
    bank_bic = forms.CharField(label='BIC', max_length=100, initial="DEMOXXXXXXX")
