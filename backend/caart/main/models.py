from django.db import models

from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser , PermissionsMixin , BaseUserManager
# Create your models here.

# export interface User{
#     _id : String
#     username: string;
#     password: string;
#     email: String;
#     userType: Number;// 1: Customer, 2: merchent, 3: admin, 4: superuser
#     dateCreated: Date;
#     dateModified: Date;
#     gender: Number;   // 1: Female, 2: Male, 3: Other
#     addresses: Object,
#     }

# export interface Jewelry{
#     _id : String;
#     name: String;
#     category: Number, // 1: necklace, 2: Ring, 3: Pendent, 4: Earings, 5: Belt buckles        
#     price: Number;
#     merchant: Object;
#     discription: String;
#     availColors: Array<String>;
#     availSize: Array<Number>;
#     refNo : Number;
#     images: Array<String>
#     dateCreated: Date;
#     dateModified: Date;
#     dimondDetails:{
#         color: Array<String>,
#         clarity: String,
#         weight: Number,
#     }
#     jewelryDetails : {
#         goldWeight: Number,
#         goldPurity: Number,
#         goldColor: Array<Number>
#     }

# # }
class CustomAccountManager(BaseUserManager):
    def create_user(self,email,username,password,**other_fields):
        email = self.normalize_email(email)
        user = self.model(email = email,username = username,**other_fields)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,email,username,password,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_superuser',True)
        other_fields.setdefault('is_active',True)
        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')
        return self.create_user(email,username,password,**other_fields)


class CustomUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(unique = True)
    username = models.CharField(max_length = 150, unique = True)
    password = models.CharField(max_length = 150)
    phone = models.BigIntegerField(default=0000000000)
    dateCreated = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)
    is_merchant = models.BooleanField(default = False)   
    dateModified = models.DateTimeField(default=timezone.now)
    gender = models.IntegerField()
    addresses = models.TextField()
    
    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username


    
class Jewelary(models.Model):
    name = models.CharField(max_length=50, blank=False ,null=False)
    category = models.IntegerField(blank=False ,null=False)
    price = models.FloatField(blank=False ,null=False)
    merchat = models.ManyToManyField(CustomUser, related_name='merchats',blank=False)
    discription = models.TextField(blank=False ,null=False)
    availColors = models.CharField(max_length=15)
    availSize = models.CharField(max_length=15, blank=False ,null=False)
    refNo = models.BigIntegerField(blank=False ,null=False)
    images = models.CharField(max_length=15 ,blank=True ,null=False)
    




