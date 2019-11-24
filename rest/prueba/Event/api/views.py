from django.shortcuts import render
from rest_framework import generics
from ..models import *
from .serializers import *
from rest_framework.permissions import IsAdminUser, IsAuthenticated,AllowAny
from rest_framework import status
#from rest_framework.response import Response
from .permissions import *
from django.core.mail import send_mail
# Create your views here.

####Event@@@@@@@@@@@   
class EventsAPIVIew(generics.ListCreateAPIView):
    
    def get_queryset(self):
        user = self.request.user           
        return Event.objects.filter(creator=user.pk)
    
    serializer_class= EventSerializer
    permission_classes=[IsAuthenticated,IsOwner]

class EventAPIView(generics.RetrieveUpdateDestroyAPIView):
    
    @property
    def event_pk(self):
        return self.kwargs['pk']
    
    def get_queryset(self):
        print(self.event_pk)
        return Event.objects.filter(id=int(self.event_pk))
    
    serializer_class= EventSerializer
    permission_classes=[IsAuthenticated,IsOwner]



####/Event@@@@@@@@@@@   

####Attendance@@@@@@@@@@@   
    