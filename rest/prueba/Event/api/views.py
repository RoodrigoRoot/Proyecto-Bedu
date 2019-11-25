##django
from django.shortcuts import render
from rest_framework import generics
from django.core.mail import send_mail

##Locals
from ..models import *
from .serializers import *
from .permissions import *
##DjangoRest
from rest_framework.permissions import IsAdminUser, IsAuthenticated,AllowAny
from rest_framework import status
from rest_framework.response import Response


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
        return Event.objects.filter(id=int(self.event_pk))
    
    serializer_class= EventSerializer
    permission_classes=[IsAuthenticated,IsOwner]


####Vote####

class VoteApisView(generics.ListCreateAPIView):    

    @property
    def event_pk(self):
        return self.kwargs['pk']
    
    def get_queryset(self):
            return DayEvent.objects.filter(event=self.event_pk)  
    
    permission_classes=[IsAuthenticated]
    serializer_class = VoteSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    



class ResultAPIView(generics.ListCreateAPIView):
    queryset=Results.objects.all()
    serializer_class=ResultsSerializer
    permission_classes=[AllowAny]
    @property
    def event_pk(self):
        return self.kwargs['pk']
    def create(self,request,*args,**kwargs):
        day1=DayEvent.objects.filter( event=self.event_pk, vote=1).count()
        day2=DayEvent.objects.filter( event=self.event_pk, vote=2).count()
        day2=DayEvent.objects.filter( event=self.event_pk, vote=3).count()
        
        
    
    
