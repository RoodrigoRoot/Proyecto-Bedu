from rest_framework import serializers, status
from django.core.mail import send_mail
from ..models import *


class EventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        fields = ("id","name_event","creator","email1","email2","email3","email4","email5","email6","email7","street","col","cp","references","date")
 

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model= Attendance
        fields = "__all__"


class ProdcutSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields = "__all__"