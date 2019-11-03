from rest_framework import serializers, status
from ..models import *
from django.core.mail import send_mail
from django.template import loader
class EventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        fields = ("id","name_event","creator","email1","email2","email3","email4","email5","email6","street","col","cp","references","date","hour")
        
    def create(self,validated_data):
        event = Event.objects.create(
            name_event = validated_data['name_event'],
            creator = validated_data['creator'],
            email1 = validated_data['email1'],
            email2 = validated_data['email2'],
            email3 = validated_data['email3'],
            email4 = validated_data['email4'],
            email5 = validated_data['email5'],
            email6 = validated_data['email6'],
            street = validated_data['street'],
            hour = validated_data['hour'],
            col = validated_data['col'],
            cp = validated_data['cp'],
            references = validated_data['references'],
            date = validated_data['date'],
       
        )
        
        html_message=loader.render_to_string('email.html',locals())
        send_mail(
            'Psst! Una carnita Asada Espera.',
            'Carnita Asada Creada',
            'leycourcino@gmail.com',
            [event.email1,event.email2,event.email3,event.email4,event.email5,event.email6],
            fail_silently=False,
            html_message=html_message
        )
        return event
       


 

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model= Attendance
        fields = "__all__"


class ProdcutSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields = "__all__"