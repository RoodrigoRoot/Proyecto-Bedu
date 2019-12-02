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
from rest_framework import status


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
    permission_classes=[IsAuthenticated]


####Vote####
class EventAPIGuestView(generics.ListAPIView):
    
    @property
    def unique(self):
        return self.kwargs['unique']

    def get_queryset(self):
        return Event.objects.filter(unique_id=self.unique)

    serializer_class= EventSerializer
    permission_classes=[AllowAny]
    
    

class VoteApisView(generics.CreateAPIView):    

    @property
    def event_pk(self):
        return self.kwargs['pk']
    
    def get_queryset(self):
            return DayEvent.objects.filter(event=self.event_pk)  
    
    permission_classes=[AllowAny]
    serializer_class = VoteSerializer
    
        
    def max_number(self,date):
        event__day1=0
        event__day2=0
        event__day3=0
        event=Event.objects.filter(id=self.event_pk)
        
        for evt in event:
            year = evt.day1.year
            month = evt.day1.month
            day = evt.day1.day
     
        event__day1="{}-{}-{}".format(year, month, day)



        for evt in event:
            year=evt.day2.year
            month=evt.day2.month
            day=evt.day2.day
     
        event__day2="{}-{}-{}".format(year,month,day)
        
        for evt in event:
            year=evt.day3.year
            month=evt.day3.month
            day=evt.day3.day
     
        event__day3="{}-{}-{}".format(year,month,day)
        
        day1=DayEvent.objects.filter(event=self.event_pk,
                                    vote=event__day1).count()
        
        day2=DayEvent.objects.filter(event=self.event_pk,
                                    vote=event__day2).count()
        
        day3=DayEvent.objects.filter(event=self.event_pk,
                                    vote=event__day3).count()
        
        
        if day1>day2 and day1>day3:
            return event__day1
        
        elif day2>day1 and day2>day3:
            return event__day2
        
        else:
            return event__day3
                                       
               
        
 
    def create(self,request,*args,**kwargs):      
    
        dayevent=DayEvent.objects.create(
            
            event=Event.objects.get(id=self.event_pk),
            vote=request.data['vote'],
        )
        
        
        
        if(Results.objects.filter(event=self.event_pk)):  
            print(request.data['vote'])       
            Results.objects.filter(event=self.event_pk).update(final_date=self.max_number(date=request.data['vote']))
            
        else:
            
            Results.objects.create(
            event=Event.objects.get(id=self.event_pk),
            final_date=self.max_number(date=request.data['vote'])
        )
        
            
        return Response("Votos Aceptados",status=status.HTTP_201_CREATED)
        



class ResultAPIView(generics.ListCreateAPIView):
    queryset=Results.objects.all()
    serializer_class=ResultsSerializer
    permission_classes=[AllowAny]
