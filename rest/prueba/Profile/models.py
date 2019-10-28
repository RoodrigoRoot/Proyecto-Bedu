from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):

    locations_MX = [
    ('GDL', 'Guadalajara'),
    ('ZAP', 'Zapopan'),
    ('TL', 'Tlaquepaque'),
    ('TLA', 'Tlajomulco'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    phone = models.CharField(("Telefono"), max_length=10)
    location =  models.CharField(("Ubiación"),choices=locations_MX,max_length=3) 
    #photo = models.ImageField(("Foto de Perfil"), upload_to='photos/')
    
    class Meta:
        verbose_name = "Perfile"
        
    def __str__(self):
       
       return self.user.username
   
class Email(models.Model):
    INVITATION="Un amigo esta planeando una carnita asada, te apuntas?"
    
    email = models.EmailField(("Email"),blank=False) 
    body = models.TextField(("Cuerpo"),default=INVITATION)   
    
    def __str__(self):
        return self.email
        