from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .templateMatch import templateMatch
import json


# Create your views here.
@api_view(['POST'])
def uploadTemplate(request):
        
        templateInvoice = request.FILES['file']
        templateInvoiceType = templateInvoice.name.split('.')[-1]
        templateContent = templateInvoice.read().decode('utf-8')
        
        matchedFactors, misMatchedFactors = templateMatch.templateMatchRouter(templateInvoiceType, templateContent)
        
        
        
       
        if len(misMatchedFactors) > 0 :
           returnResult = {"matchedFactors" : matchedFactors, "misMatchedFactors" : misMatchedFactors}
 
           return JsonResponse(  returnResult, status = 201)
        else: 
           return HttpResponse(message = "Success" ,status = 200)