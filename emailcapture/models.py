from django.db import models

# Create your models here.

class Email(models.Model):
    email = models.EmailField(max_length=50)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return self.email