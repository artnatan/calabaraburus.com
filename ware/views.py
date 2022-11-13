from django.http import request
from django.shortcuts import render
from ware.api.products import ProductListAPI

def index(request):
    request = ProductListAPI()
    return render(request, "index.html")