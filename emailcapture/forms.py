from .models import Email
from django import forms


class EmailForm(forms.ModelForm):
    class Meta:
        model = Email
        fields = ('email', )
        widgets = {
            'email': forms.TextInput(attrs={'class': 'form-control col-8', 'placeholder': 'Email', 'id': 'inputPassword2'})
        }