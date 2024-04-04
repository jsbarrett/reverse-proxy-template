# Reverse Proxy using nginx and Docker

This template project is about getting setup quickly to run a proxy to multiple applications. The idea being you could point multiple domain records at the same IP address (ex: your home address) and then have the proxy forward the request on to the appropriate application depending on the domain it's coming from.

Build the applications, and then update this config with whatever name(s) chosen for the apps. Will need to update both the docker compose file as well as the nginx config.

Can build the proxy image with following command from this directory:

`docker build -t reverse-proxy .`

And then you should be able to just run:
`docker compose up -d`

And assuming you already have your DNS records created, and your home router forwarding traffic (if doing this on home network). Then you should be good to go.

You could do something similar all in the cloud, by setting up either something like a VPC in AWS or just a firewall in Digital Ocean with all your applications, and then only exposing the reverse-proxy to external traffic.

This project was initially intended for running containers that are all on the same machine/vm.
