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
    cp = models.CharField(("C.P"), max_length=50,default="44100")
    references= models.TextField(("Referencias"))
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    modified = models.DateTimeField(auto_now=True, auto_now_add=False)
    day1 = models.DateField(("Primer Fecha"),max_length=12)
    day2 = models.DateField(("Segunda Fecha"),max_length=12)
    day3 = models.DateField(("Tercera Fecha"),max_length=12)
    date = models.DateField(("Fecha Final"),default="0000-00-00",max_length=12)
    hour = models.TimeField(auto_now=False, auto_now_add=False)
    
    def __str__(self):
        return self.name_event
    class Meta:
        verbose_name_plural="Eventos"
    
class DayEvent(models.Model):
    
    DATE = [(1,1),(2, 2),(3, 3)]
    user = models.CharField("Nombre",max_length=35)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    vote= models.IntegerField(("Que fecha sera la carnita")) 
    
    def __str__(self):
        return "{}: {}".format(self.vote, self.event)

    class Meta:
        verbose_name_plural="Votos"

 
class Results(models.Model):

    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    final_date=models.DateField(("Fecha Final"),max_length=12)
    
    def __str__(self):
        return "{}: {}".format(self.event,self.final_date)
    class Meta:
        verbose_name_plural="Resultados"