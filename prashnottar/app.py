from flask import Flask, render_template, request, session, redirect
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
from flask_mail import Mail
import json
import os
import math
from datetime import datetime

app = Flask(__name__)
app.secret_key ='super_secrete_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/sd_db'
db = SQLAlchemy(app)

@app.route('/')
def home():
    k=[1,2]
    return render_template('login.html',name=k)

@app.route('/create')
def create():
    return render_template('create.html')
@app.route('/question')
def question():
    return render_template('question.html')


@app.route('/upd',methods = ['GET', 'POST'])
def upd():
    if request.method=='POST':
        cname =request.form.get('details')
        f = open("prashnottar/static/question_papers/k45.txt", "w")
        f.write(cname)
        f.close()
        return render_template('home.html')
        #return redirect('/home')

@app.route('/validation',methods = ['GET', 'POST'])
def validation():
    if request.method=='POST':
        cname =request.form.get('details')
        cname=eval(cname)
        #this is dictionary which has answers with marks
    return cname


@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='POST':
        username = request.form.get('uname')
        password = request.form.get('psw')
        # com=comreg.query.filter_by(username=username).first()
        # names="Incorrect Username"
        # if com!=None:
        #     if(com.password==password):
        #         session['user']=com.username
        #         return redirect('/cmprofil')
        #     names="Incorrect Password"
        # com=wreg.query.filter_by(username=username).first()
        # if com!=None:
        #     if(com.password==password):
        #         session['user']=com.username
        #         return redirect('/wrprofile')
        #     names="Incorrect Password"
    

    return render_template('home.html')

@app.route('/up',methods = ['GET', 'POST'])
def up():
    f = open("prashnottar/static/question_papers/k45.txt", "r")


    k=f.read()
    f.close()
    k=eval(k)
    return k
    	


if __name__ == '__main__':
    app.run()
    