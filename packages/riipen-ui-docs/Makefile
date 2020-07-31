# You can change the default config with `make config="./config/my_environment.env" build`
config ?= ./config/development.env
include $(config)
export $(shell sed 's/=.*//' $(config))

# You can change the default version with `make version="staging" tag`
version ?= latest

###
# ANSIBLE TASKS
###

# Create a new cloud configuration in AWS for the given environment
cloud:
	ansible-playbook -e environment_name=$(version) -e aws_acm_arn=$(AWS_ACM_ARN) -e enabled=false ./config/ansible/make.yml

# Ensures a cloud environment exists in AWS for the given environment and the cloud front distribution is enabled
cloud-run:
	ansible-playbook -e environment_name=$(version) -e aws_acm_arn=$(AWS_ACM_ARN) -e enabled=true ./config/ansible/make.yml
