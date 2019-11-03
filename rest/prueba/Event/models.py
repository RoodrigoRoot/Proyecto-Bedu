from django.db import models
from Profile.models import Profile
# Create your models here.
class Event(models.Model):
    
    name_event = models.CharField(("Motivo"), max_length=200)
    creator = models.ForeignKey(Profile, on_delete=models.CASCADE)
    email1 = models.EmailField(("Primer invitado"), max_length=254)
    email2 = models.EmailField(("Segundo invitado"), max_length=254)
    email3 = models.EmailField(("Tercer invitado"), max_length=254)
    email4 = models.EmailField(("Cuarto invitado"), max_length=254,blank=True)
    email5 = models.EmailField(("Quinto invitado"), max_length=254,blank=True)
    email6 = models.EmailField(("Sexto invitado"), max_length=254,blank=True)
    
    street = models.CharField(("Calle"), max_length=50,blank=False)
    col = models.CharField(("Colonia"), max_length=50,blank=True,default="Sin nombre")
    cp = models.CharField(("C.P"), max_length=50,default="SN")
    references= models.TextField(("Referencias"))
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    modified = models.DateTimeField(auto_now=True, auto_now_add=False)
    date = models.DateField(("Fecha Final"),default="00:00:0000T",max_length=12)
    hour = models.TimeField(auto_now=False, auto_now_add=False)
    def __str__(self):
        return self.name_event

    def fecha_final(self):
        self.votos.filter(fecha1=True).count()

class DayEvent(models.Model):
    DATE = [('Fecha 1','Fecha 1'),('Fecha 2','Fecha 2'),('Fecha 3', 'Fecha3')]
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    vote= models.CharField(("Que fecha sera la carnita"),choices=DATE,max_length=15) 
    def __str__(self):
        return self.win
        
 
class Attendance(models.Model):

    atendance = models.BooleanField(("Asistencia"),default=False)
    user = models.ForeignKey(Profile,on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return "{}:{}".format(self.user,self.atendance)


class Product(models.Model):
    CHOICES_PRODUCT = [('Chorizo','Chorizo'),('Carbon','Carbon')]
    ''' CHOICES_PRODUCT = [('Chorizo'),('Carbon'),('Cerveza'),('Arrachera'),('Hielos'),('Refrescos'),('Salsas'),('Tortillas'),('Vegetales')] '''
    product = models.CharField(("Que llevas"),choices=CHOICES_PRODUCT,max_length=15) 
    user = models.ForeignKey(Profile,on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return "{}:{}".format(self.user,self.product)