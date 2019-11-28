from django.urls import path
from .views import *

urlpatterns = [
    

    path('api/eventos/',EventsAPIVIew.as_view(),name='eventos'),
    path('api/eventos/<int:pk>/',EventAPIView.as_view(),name='eventos_id'),
    path('api/eventos/<int:pk>/votos/',VoteApisView.as_view(),name='votos'),
    path('api/eventos/<int:pk>/votos/resultados/',ResultAPIView.as_view(),name='resultados'),
]
