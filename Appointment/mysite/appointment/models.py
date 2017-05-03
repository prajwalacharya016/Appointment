from __future__ import unicode_literals

from django.db import models

import datetime
from django.utils import timezone


class Appointment(models.Model):
    appointment_text = models.CharField(max_length=200,default="")
    date = models.CharField(max_length=200, default="")
    time = models.CharField(max_length=200, default="")


# Create your models here.
