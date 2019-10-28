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
    queryset= Event.objects.all()
    serializer_class= EventSerializer
    permission_classes=[IsAuthenticated]

class EventAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Event.objects.all()
    serializer_class= EventSerializer
    permission_classes=[IsAuthenticated]



####/Event@@@@@@@@@@@   

####Attendance@@@@@@@@@@@   
class AttendancesAPIVIew(generics.ListCreateAPIView):
    queryset= Attendance.objects.all()
    serializer_class= AttendanceSerializer
    permission_classes=()

class AttendanceAPIVIew(generics.RetrieveUpdateDestroyAPIView):
    queryset= Attendance.objects.all()
    serializer_class= AttendanceSerializer
    permission_classes=()
####/Attendance@@@@@@@@@@@   
 
 
####Productos@@@@@@@@@@@   
    
class ProductsAPIVIew(generics.ListCreateAPIView):
    queryset= Product.objects.all()
    serializer_class= ProdcutSerializer
    permission_classes=()

class ProductAPIVIew(generics.RetrieveUpdateDestroyAPIView):
    queryset= Product.objects.all()
    serializer_class= ProdcutSerializer
    permission_classes=()

####/Productos@@@@@@@@@@@
    