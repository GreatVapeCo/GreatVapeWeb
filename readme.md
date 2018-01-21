<h3>Startup commands</h3>
<hr>


<h5>Locals</h5>
npm install         <br>
<br>


<b>START: </b>

nohup node ./bin/www &

-or-

node ./bin/www


####Port Redirect

#####localhost/loopback

sudo iptables -t nat -I OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j REDIRECT --to-ports 3000

##### external
sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000



<p><b>SSH Connect: </b>ssh -i GreatVapeWeb.pem ubuntu@18.216.110.119

TODO: https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-2-5fbdea95f8a1
23