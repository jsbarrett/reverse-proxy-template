# Reverse Proxy using nginx and Docker

## Intro

This template project is about getting setup quickly to run a proxy to multiple applications. The idea being you could point multiple domain records at the same IP address (ex: your home address) and then have the proxy forward the request on to the appropriate application depending on the domain it's coming from.

## Prerequisites

Docker Engine (can find installation instructions here: https://docs.docker.com/engine/install/)
I use Ubuntu pretty consistently so will include the current instructions for distro here:
If you have cloned this repo, you can just run using the script `./install-docker.sh`

Otherwise you can copy-paste the below:

```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Then install
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Setup

Build the applications, and then update this config with whatever name(s) chosen for the apps. Will need to update both the docker compose file as well as the nginx config.

Can build the proxy image with following command from this directory:

`docker build -t reverse-proxy .`

And then you should be able to just run:
`docker compose up -d`

And assuming you already have your DNS records created, and your home router forwarding traffic (if doing this on home network). Then you should be good to go.

You could do something similar all in the cloud, by setting up either something like a VPC in AWS or just a firewall in Digital Ocean with all your applications, and then only exposing the reverse-proxy to external traffic.

This project was initially intended for running containers that are all on the same machine/vm.
