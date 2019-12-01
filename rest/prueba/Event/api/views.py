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

class VoteApisView(generics.ListCreateAPIView):    

    @property
    def event_pk(self):
        return self.kwargs['pk']
    
    def get_queryset(self):
            return DayEvent.objects.filter(event=self.event_pk)  
    
    permission_classes=[IsAuthenticated]
    serializer_class = VoteSerializer
    
    
    def max_number(self,date):
        
        day1=DayEvent.objects.filter( event=self.event_pk, vote=date).count(),
        day2=DayEvent.objects.filter( event=self.event_pk, vote=date).count(),
        day3=DayEvent.objects.filter( event=self.event_pk, vote=date).count(),
        dat=DayEvent.objects.filter(event=self.event_pk, vote=date)
        for data in dat:
            
            year=data.vote.year
            day=data.vote.day
            month=data.vote.month
        
        final__date="{}-{}-{}".format(year,month,day)

        if day1 > day2 and day1 > day3:            
            return final__date
        elif day2 > day1 and day2 > day3:
            return final__date
        else:
            return final__date
        
        
    def create(self,request,*args,**kwargs):      
    
        dayevent=DayEvent.objects.create(
            
            event=Event.objects.get(id=self.event_pk),
            vote=request.data['vote'],
        )
        
        
        
        if(Results.objects.filter(event=self.event_pk)):         
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
"""     
    @property
    def event_pk(self):
        return self.kwargs['pk']
    
    def max_number(self, day1, day2, day3):
        if day1 > day2 and day1 > day3:
            return day1
        elif day2 > day1 and day2 > day3:
            return day2
        else:
            return day3
        
    
    def create(self,request,*args,**kwargs):
        day1=DayEvent.objects.filter( event=self.event_pk, vote=1).count()
        day2=DayEvent.objects.filter( event=self.event_pk, vote=2).count()
        day3=DayEvent.objects.filter( event=self.event_pk, vote=3).count()
        
        event = self.event_pk
        final_date = max_number(day1,day2,day3)
        Results.objects.create(event,final_date)
        return Results
     """
    
