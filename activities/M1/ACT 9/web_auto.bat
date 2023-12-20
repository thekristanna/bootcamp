echo off
title Windows Setup

echo Setting up web server directories...

mkdir "webpage"
cd webpage

mkdir "css"
cd css
type nul > design.css
cd ..

mkdir "js"
cd js
type nul > slideshow.js
type nul > gallery.js
cd ..

type nul > about.html
type nul > shop.html

echo ^<h1^>Batch run successful!^</h1^> > index.html
start index.html


echo Checking internet connection...
ping google.com

echo Saving your network info...
ipconfig /all > network.txt

echo Done!

echo date /t >> run_instances.txt

pause
