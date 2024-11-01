# Be ITMO VK-MINI-APP
Be ITMO is a VK Mini App for exploring the ITMO culture and supporting students in their interaction with the university. The application includes tasks, information about directions and a virtual assistant of the Leopard, which develops as the tasks are completed.

_Developed together with [gaminv](https://github.com/gaminv), [raikevichI](https://github.com/raikevichI) and [EdwardShiroki](https://github.com/EdwardShiroki)_

## Technologies Used
- **React** is a library for creating user interfaces.
- **VKUI** — a set of components for the development of VK Mini Apps.
- **TypeScript** — for typing and improving code stability.
- **VK Mini Apps Router** — navigation control in the app.
- **VK Bridge** — interaction with the VKontakte API to obtain user data.
- **Django** is a backend framework for managing application logic and data.
- **PostgreSQL** is a relational database for storing user data and progress.
- **Docker** — containerization of the application and database for easy deployment.

## Features
- **A virtual character** is a Leopard that helps to get acquainted with the directions of ITMO.
- **Character levels** — The Leopard goes through the levels, starting from "Not a dummy" and up to "Gigachad".
- **Progress of the Leopard** — the user's progress is displayed on the progress bar, the icon of the Leopard changes.
- **Points and rewards** — Tasks bring points that can be exchanged for achievements and university merch.
- **ITMO directions** — such as be friendly, be healthy, be eco and others where you can perform unique tasks.

## Getting Started

### 1. Cloning a repository

First clone the repository and go to the project directory:

```
git clone https://github.com/vovandreevik/VK-MINI-APP.git
cd VK-MINI-APP
```

### 2. Configuring the PostgreSQL database in Docker
The project uses PostgreSQL to store data, and the database runs in a Docker container. To run, run the command:

```
docker-compose up -d
```
This will create and launch a container with PostgreSQL, which will be available on port 5432. Database Parameters:

User name: `myuser`

Password: `mypassword`

Database: `mydb`

### 3. Setting up and running the Django backend
Create a virtual environment, activate it and install dependencies for the backend:

```
python -m venv venv
source venv/bin/activate # For Windows use venv\Scripts\activate
pip install -r requirements.txt
```
Then perform migrations and start the Django server:

```
python manage.py migrate
python manage.py runserver
```

### 4. Installing and launching VK Mini App

To install and run VK Mini App, refer to [documentation](https://dev.vk.com/ru/mini-apps/overview ).

## Pictures

1. Main Page (light theme)
   
<img src="https://github.com/user-attachments/assets/394ea775-43b5-48f7-aa54-62ffd0e3f54d" alt="photo" height="500"/>

1.1 Main Page (dark theme)
   
<img src="https://github.com/user-attachments/assets/ef617e4a-21e3-4f39-8411-bc7055828122" alt="photo" height="500"/>

2. Be ITMO (light theme)
   
<img src="https://github.com/user-attachments/assets/9db94cae-9fef-450d-a310-9abdec3a64f6" alt="photo" height="500"/>

2.1 Be ITMO (dark theme)
   
<img src="https://github.com/user-attachments/assets/f8895d4a-fd26-472c-bd72-7bb51711979f" alt="photo" height="500"/>

3. About page
    
<img src="https://github.com/user-attachments/assets/d2c28127-281f-4ca7-ab12-c4e962947b7a" alt="photo" height="500"/>

4. Tasks (light theme)
   
<img src="https://github.com/user-attachments/assets/b87e364d-01d0-4030-a1e0-806fe5d683e5" alt="photo" height="500"/>

4.1 Tasks (dark theme)

<img src="https://github.com/user-attachments/assets/08bab6be-d1db-4a52-81b5-782127e94f7f" alt="photo" height="500"/>

4.2 The Library task

<img src="https://github.com/user-attachments/assets/afaf62f6-da7c-42c0-970a-df16695773a2" alt="photo" height="500"/>

4.3 The Blood donation task 

<img src="https://github.com/user-attachments/assets/2586243a-1dc1-48ee-81f9-6b9080e7da83" alt="photo" height="500"/>

5. Shop (lihtk theme)
   
<img src="https://github.com/user-attachments/assets/a97ae5dd-7260-49ab-adc1-c8627280f158" alt="photo" height="500"/>

5.1 Shop (dark theme)

<img src="https://github.com/user-attachments/assets/524ed227-37ac-4a31-9337-35b74a8d9b5d" alt="photo" height="500"/>

6. Gigachad
   
<img src="https://github.com/user-attachments/assets/c69cc081-811d-483a-97ea-5e069a49345d" alt="photo" height="500"/>
