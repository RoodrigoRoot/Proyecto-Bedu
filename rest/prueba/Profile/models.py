from django.db import models
from django.contrib.auth.models import User
from django.core.mail import send_mail

class Profile(models.Model):

    locations_MX = [
    ('Guadalajara', 'Guadalajara'),
    ('Guadalajara', 'Zapopan'),
    ('Guadalajara', 'Tlaquepaque'),
    ('Guadalajara', 'Tlajomulco'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    phone = models.CharField(("Telefono"), max_length=10)
    location =  models.CharField(("Ubiación"),choices=locations_MX,max_length=15) 
    
    
    class Meta:
        verbose_name_plural = "Perfiles"
        
    def __str__(self):
       
       return self.user.username
   

        