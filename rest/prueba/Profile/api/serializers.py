from rest_framework import serializers, status
from ..models import *
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields=("id","phone","location")

    def validate_phone(self,value):
        if len(value) <10:
            raise serializers.ValidationError("Tu numero no puede ser menor de 10 digitos ")
        if not value.startswith('33'):
                raise serializers.ValidationError("Solo puede ser lada de Guadalajara")
        return value        
        
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('id','profile','username','first_name','last_name', 'email','password')

    def validate_username(self, value):
        if len(value) <3:
            raise serializers.ValidationError("El nombre de usuario no puede ser menor de 3 caracteres")
            
        return value
    
    def create(self, validated_data):
        
        user = User.objects.create_user(
            
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            password = validated_data['password'],
            email = validated_data['email'],
            is_active=True
            )
        Token.objects.create(user=user) 
        profile = validated_data['profile']
        user_profile = Profile.objects.create(user = user, **profile)
          
        return user
    
    def update(self,instance,validated_data):
        instance.username = validated_data.get('username',instance.username)
        instance.email = validated_data.get('email',instance.email)
        instance.first_name = validated_data.get('first_name',instance.first_name)
        instance.last_name = validated_data.get('last_name',instance.last_name)
        instance.set_password( validated_data.get('password',instance.password))
        instance.id = validated_data.get('id',instance.id)
        profile = Profile.objects.get(id=instance.id)
        pro = validated_data.get('profile')
        instance.save()
        profile.phone=pro['phone']
        profile.location=pro['location']
        profile.save()
        return instance
        
        



    
