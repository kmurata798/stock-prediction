from django.shortcuts import render
# import http response function from the http module in the django package
from django.http import HttpResponse

def myView(request):
    return HttpResponse('Heres some stocks.')