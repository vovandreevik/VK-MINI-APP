from rest_framework import viewsets
from .models import ImageData
from .serializers import ImageDataSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.contrib.auth import authenticate




class ImageDataViewSet(viewsets.ModelViewSet):
    queryset = ImageData.objects.all()
    serializer_class = ImageDataSerializer

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            # Получаем данные из запроса
            data = json.loads(request.body)
            print("Received data:", data)  # Для отладки
            
            # Извлекаем логин и пароль
            username = data.get('login')
            password = data.get('password')

            print(f"Username: {username}, Password: {password}")  # Логируем данные

            # Возвращаем данные в верхнем регистре
            return JsonResponse({
                'username': username.upper() if username else '',  # Логин в верхнем регистре
                'password': password.upper() if password else '',   # Пароль в верхнем регистре
                'message': 'DATA RECEIVED',                          # Сообщение заглавными буквами
                'status': 'SUCCESS'                                  # Статус заглавными буквами
            }, status=200)
        
        except json.JSONDecodeError:
            # Обрабатываем случай, когда тело запроса не является JSON
            return JsonResponse({
                'message': 'INVALID JSON FORMAT',  # Делаем сообщение заглавными буквами
                'status': 'ERROR'                   # Статус заглавными буквами
            }, status=400)

    # Если метод запроса не POST
    return JsonResponse({
        'message': 'METHOD NOT ALLOWED',      # Делаем сообщение заглавными буквами
        'status': 'ERROR'                      # Статус заглавными буквами
    }, status=405)