from rest_framework import permissions


SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS']
UPDATE_METHODS = ['PUT', 'PATCH']
CREATE_METHODS = ['POST', ]
DELETE_METHODS = ['DELETE', ]

class IsOwner(permissions.BasePermission):
    message="No eres el usuario propietario"

    def has_permission(self, request, view):
        if request.method in CREATE_METHODS and request.data:
            # raise NotAcceptable('Solo puedes crear tus propios eventos')
            return request.user.id == request.data['creator']
        return True

    def has_object_permission(self,request,view,obj):
        if request.method in UPDATE_METHODS + DELETE_METHODS:
            return request.user.username  == obj.username
            
        return True
    