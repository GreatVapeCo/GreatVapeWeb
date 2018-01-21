<h3>Startup commands</h3>
<hr>


<h5>Locals</h5>
npm install         <br>
<br>


<b>START: </b>

nohup node ./bin/www &

-or-

node ./bin/www


####Start-up script

 
{ # 'try' block
    forever stop bin/www
} || { # 'catch' block
    echo "Forever server not running"
}


npm install
BUILD_ID=dontKillMe
forever start -o out.log -e err.log bin/www

####SSH

<p><b>SSH Connect: </b>ssh -i GreatVapeWeb1.pem ubuntu@52.14.137.31
