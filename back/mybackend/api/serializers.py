from rest_framework import serializers
from .models import User, Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['task_name', 'task_condition', 'access_status', 'completion_status']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'level_number', 'level_text', 'count_of_money', 'count_of_exp']