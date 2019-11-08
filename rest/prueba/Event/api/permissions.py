from rest_framework import permissions


SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS']
UPDATE_METHODS = ['PUT', 'PATCH']
CREATE_METHODS = ['POST', ]
DELETE_METHODS = ['DELETE', ]

class IsOwner(permissions.BasePermission):
    message="No tienes permisos sobre este evento"

    def has_permission(self, request, view): 
               
        if request.method in CREATE_METHODS and request.data:
            return int(request.user.id) == int(request.data['creator'])
        return True

    def has_object_permission(self,request,view,obj):
        if request.method in UPDATE_METHODS + DELETE_METHODS:
            return int(request.user.username)  == int(obj.creator)
            
        return True
    