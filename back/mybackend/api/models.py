from django.db import models

class User(models.Model):
    level_number = models.IntegerField(default=1)
    level_text = models.CharField(max_length=255, default='Beginner')
    count_of_money = models.IntegerField(default=0)
    count_of_exp = models.IntegerField(default=0)

    def __str__(self):
        return f"User {self.id} - Level {self.level_number}"
    
class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Связь с пользователем
    task_name = models.CharField(max_length=100)
    task_condition = models.CharField(max_length=200)
    access_status = models.BooleanField(default=True)  # Статус доступа к заданию
    completion_status = models.BooleanField(default=False)  # Статус 