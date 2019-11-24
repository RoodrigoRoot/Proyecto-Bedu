from django.urls import path
from .views import *

urlpatterns = [
    

    path('api/eventos/',EventsAPIVIew.as_view(),name='eventos'),
    path('api/eventos/<int:pk>',EventAPIView.as_view(),name='eventos_id'),
    
]
