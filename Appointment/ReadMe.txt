Technology Used:

Python: Backend Scripting
JSON: Data Passing
Sql Lite: Database
JQUERY: JavaScript and FrontEnd
HTML: FrontEnd
BootStrap: CSS

Requirements:
All three requirements are fulfilled

IDE: JetBrains Pycharm

Python Framework: Django

Things required to run the app:

Makemigration <appname> //appointment
sqlmigrate <appname> 0001
migrate
Add data to database using Add


Full Code Provided

Single Setting file, single template file and Function Based Views due to small nature of project
Output Screenshot provided and attached with this folder
No validation of data, everything is String just for the simplicity

Steps to run the code

-Clone the repository https://github.com/prajwalacharya016/Appointment.git
-pip install django //(if no django)
-Find the folder with manage.py- (most possibly cd Appointment/Appointment/mysite)
-python manage.py makemigrations appointment 
-python manage.py sqlmigrate appointment 0001
-python manage.py migrate
-python manage.py runserver 
-Open the Browser and type :
	http://127.0.0.1:8000/appointment/
-Initial Database so nothing in it add data 
-Try search with or without anything 
