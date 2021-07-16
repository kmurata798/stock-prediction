from django.shortcuts import render
from django.http import HttpResponse

def companiesView(request):
    return render(request, 'companies.html')