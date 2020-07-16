from django.shortcuts import render, redirect
from .forms import EmailForm
from django.http import HttpResponse
from django.contrib import messages
from .models import Email


# Create your views here.

def index(request):
    if request.method == 'POST':
        new_email = EmailForm(data=request.POST)    # Instantiate the form
        all_emails = list(Email.objects.all())      # Get a list of emails in the database
        email_list = [str(x) for x in all_emails]   # coerce the list items to strings
        if new_email.is_valid():                    # Check if the submission is a valid email address
            if new_email['email'].data in email_list:
                messages.warning(request, 'Email already exists')
                return redirect('/')
                # return HttpResponse('Email Exists')
            else:
                # persist to database
                messages.success(request, 'Email saved successfully')
                new_email.save()
                return redirect('/')
        else:
            messages.error(request, 'Invalid Email Entered')
    else:
        new_email = EmailForm()
    context = {'new_email': new_email}
    return render(request, 'index.html', context)
