"""stock_prediction URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from users.views import myView
from companies.views import companiesView

urlpatterns = [
    path('admin/', admin.site.urls),
    # users will visit users.views first
    path('', TemplateView.as_view(template_name='index.html')),
    # path('', myView),
    path('companies/', companiesView),
    # re_path(r'^api/users/$', views.users_list),
    # re_path(r'^api/students/([0-9])$', views.students_detail),
]
