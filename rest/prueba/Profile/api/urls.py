from django.urls import path
from .views import *
from rest_framework.authtoken import views
urlpatterns = [
    
    path('api/usuarios/',CreateUsers.as_view()),
    path('api/usuarios/<int:pk>',UserList.as_view()),
    path('api/login/',views.obtain_auth_token),
        path('api/v2/login/',CustomObtainAuthToken.as_view())
    
    
]