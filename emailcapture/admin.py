from django.contrib import admin
from .models import Email
# Register your models here.

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ('email', 'date', 'time')
    list_filter = ('date', )
    search_fields = ('email', 'date')


admin.site.site_header = 'HouseVerify Admin'