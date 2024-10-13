from rest_framework import viewsets
from .models import User, Task
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist


@csrf_exempt
def get_user_data(request):
    if request.method == 'POST':
        try:
            # Получаем данные из запроса
            data = json.loads(request.body)
            user_id = data.get('id')  # Получаем ID пользователя
            
            print(f"Received request for user ID: {user_id}")  # Логируем ID пользователя
            
            # Проверяем, существует ли пользователь в базе данных
            user, created = User.objects.get_or_create(
                id=user_id,
                defaults={
                    'level_number': 1,  # Стоковое значение для уровня
                    'level_text': 'Невдупленыш',  # Стоковое значение для текста уровня
                    'count_of_money': 0,  # Стоковое значение для денег
                    'count_of_exp': 0,  # Стоковое значение для опыта
                }
            )
            
            # Подготовка данных пользователя для ответа
            user_data = {
                'id': user.id,
                'levelNumber': user.level_number,
                'levelText': user.level_text,
                'countOfMoney': str(user.count_of_money),  # Преобразуем Decimal в строку
                'countOfExp': user.count_of_exp,
            }

            # Если пользователь только что создан
            if created:
                print(f"New user created with ID: {user.id}")  # Логируем создание нового пользователя
            else:
                print(f"Existing user found with ID: {user.id}")  # Логируем существующего пользователя
            
            return JsonResponse({
                'status': 'success',
                'user': user_data
            }, status=200)
        
        except json.JSONDecodeError:
            return JsonResponse({
                'status': 'error',
                'message': 'INVALID JSON FORMAT'
            }, status=400)

    # Если метод запроса не POST
    return JsonResponse({
        'status': 'error',
        'message': 'METHOD NOT ALLOWED'
    }, status=405)

@csrf_exempt
def get_user_tasks(request):
    if request.method == 'POST':
        try:
            # Получаем данные из запроса
            data = json.loads(request.body)
            user_id = data.get('id')

            if not user_id:
                return JsonResponse({'message': 'User ID is required', 'status': 'ERROR'}, status=400)

            # Проверяем, существует ли пользователь с таким ID
            try:
                user = User.objects.get(id=user_id)
            except ObjectDoesNotExist:
                return JsonResponse({'message': 'User not found', 'status': 'ERROR'}, status=404)

            # Получаем задания пользователя
            tasks = Task.objects.filter(user=user)
            tasks_data = []
            for task in tasks:
                tasks_data.append({
                    'task_name': task.task_name,
                    'task_condition': task.task_condition,
                    'access_status': task.access_status,
                    'completion_status': task.completion_status
                })

            # Возвращаем данные о задачах пользователя
            return JsonResponse({
                'user_id': user_id,
                'tasks': tasks_data,
                'message': 'TASKS RETRIEVED',
                'status': 'SUCCESS'
            }, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'INVALID JSON FORMAT', 'status': 'ERROR'}, status=400)

    return JsonResponse({'message': 'METHOD NOT ALLOWED', 'status': 'ERROR'}, status=405)