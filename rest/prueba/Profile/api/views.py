from rest_framework import generics
from ..models import *
from .serializers import *
from rest_framework.permissions import  IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.response import Response
from .permissions import *
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
class CreateUsers(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes=()
    permission_classes = ()
    #permission_classes=[IsAuthenticated]
        
class UserList(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, )


class CustomObtainAuthToken(ObtainAuthToken):
    permission_classes = ()
    def post(self, request, *args,**kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})

