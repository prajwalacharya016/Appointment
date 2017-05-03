from django.shortcuts import render
from django.core import serializers
from .models import Appointment
from django.http import HttpResponse, JsonResponse,HttpResponseRedirect
import json


def index(request):
    if request.method == "POST":
        addVal = Appointment(appointment_text=request.POST.get("description", ""), date=request.POST.get("date", ""),
                             time=request.POST.get("time", ""))
        addVal.save()
    return render(request, 'appointment/index.html')


def ajax_return(request):
    textval = request.GET.get('txtval', None)

    data={}
    if(textval==""):
        qs = Appointment.objects.all().values()
        data={
            'test': list(qs)
        }
    else:
        qs= Appointment.objects.filter(appointment_text__icontains=textval).values()
        data = {
            'test': list(qs)
        }

    return JsonResponse(data)
# Create your views here.
