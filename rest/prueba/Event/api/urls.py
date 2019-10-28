from django.urls import path
from .views import *

urlpatterns = [
    

    path('api/eventos/',EventsAPIVIew.as_view(),name='eventos'),
    path('api/eventos/<int:pk>',EventAPIView.as_view(),name='eventos_id'),
    
    path('api/eventos/asistencias/',AttendancesAPIVIew.as_view(),name='asistencias'),
    path('api/eventos/asistencias/<int:pk>/',AttendanceAPIVIew.as_view(),name='asistencias_id'),
    
    path('api/eventos/asistencias/<int:pk>/productos/',ProductsAPIVIew.as_view(),name='productos'),
    
]
