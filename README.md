# iac-pulumi

## .env file contents for reference

### .env for dev
VPC_NAME="csye6225-dev-vpc"
GW_NAME="csye6225-dev-igw"
PUBLIC_SUBNET_1_NAME="csye6225-public-subnet-1"
PUBLIC_SUBNET_2_NAME="csye6225-public-subnet-2"
PUBLIC_SUBNET_3_NAME="csye6225-public-subnet-3"
PRIVATE_SUBNET_1_NAME="csye6225-private-subnet-1"
PRIVATE_SUBNET_2_NAME="csye6225-private-subnet-2"
PRIVATE_SUBNET_3_NAME="csye6225-private-subnet-3"
PUBLIC_ROUTE_TABLE_NAME="csye6225-public-routing-table"
PRIVATE_ROUTE_TABLE_NAME="csye6225-public-routing-table"
PUBLIC_ROUTE_TABLE_NAME="csye6225-public-routing-table"
PRIVATE_ROUTE_TABLE_NAME="csye6225-private-routing-table"
PUBLIC_ROUTE_SUBNET_ASSOCIATION_1_NAME="csye6225-public-routing-subnet_1"
PUBLIC_ROUTE_SUBNET_ASSOCIATION_2_NAME="csye6225-public-routing-subnet_2"
PUBLIC_ROUTE_SUBNET_ASSOCIATION_3_NAME="csye6225-public-routing-subnet_3"
PRIVATE_ROUTE_SUBNET_ASSOCIATION_1_NAME="csye6225-private-routing-subnet_1"
PRIVATE_ROUTE_SUBNET_ASSOCIATION_2_NAME="csye6225-private-routing-subnet_2"
PRIVATE_ROUTE_SUBNET_ASSOCIATION_3_NAME="csye6225-private-routing-subnet_3"
PUBLIC_ROUTE_NAME="csye6225-public-routing"

### .env for demo
VPC_NAME="csye6225-demo-vpc"
GW_NAME="csye6225-demo-igw"
PUBLIC_SUBNET_1_NAME="csye6225-demo-public-subnet-1"
PUBLIC_SUBNET_2_NAME="csye6225-demo-public-subnet-2"
PUBLIC_SUBNET_3_NAME="csye6225-demo-public-subnet-3"
PRIVATE_SUBNET_1_NAME="csye6225-demo-private-subnet-1"
PRIVATE_SUBNET_2_NAME="csye6225-demo-private-subnet-2"
PRIVATE_SUBNET_3_NAME="csye6225-demo-private-subnet-3"
PUBLIC_ROUTE_TABLE_NAME="csye6225-demo-public-routing-table"
PRIVATE_ROUTE_TABLE_NAME="csye6225-demo-public-routing-table"
PUBLIC_ROUTE_TABLE_NAME="csye6225-demo-public-routing-table"
PRIVATE_ROUTE_TABLE_NAME="csye6225-demo-private-routing-table"
PUBLIC_ROUTE_SUBNET_ASSOCIATION_1_NAME="csye6225-demo-public-routing-subnet_1"
PUBLIC_ROUTE_SUBNET_ASSOCIATION_2_NAME="csye6225-demo-public-routing-subnet_2"
PUBLIC_ROUTE_SUBNET_ASSOCIATION_3_NAME="csye6225-demo-public-routing-subnet_3"
PRIVATE_ROUTE_SUBNET_ASSOCIATION_1_NAME="csye6225-demo-private-routing-subnet_1"
PRIVATE_ROUTE_SUBNET_ASSOCIATION_2_NAME="csye6225-demo-private-routing-subnet_2"
PRIVATE_ROUTE_SUBNET_ASSOCIATION_3_NAME="csye6225-demo-private-routing-subnet_3"
PUBLIC_ROUTE_NAME="csye6225-demo-public-routing"


## Commands needed for Pulumi

***pulumi login --local***
    Command to use CLI instead of Pulumi paid cloud service.

***pulumi new***
    Command to create a pulumi workspace.

***pulumi refresh***
    Update pulumi state

***pulumi preview***
    After refresh to see the pulumi updates
    After checking the preview do ***pulumi up*** to publish the changes

***pulumi stack init <stack-name>***
    Command to initialize a new stack
    Creates the yaml files for that particular stack

***pulumi stack select <stack-name>***
    Command to select a particular stack after setting up the configuration

***pulumi stack export***
    Command to get the pulumi stack
    Used to get the URN for a resource

***pulumi destroy --target <URN_OF_THE_SUBNET>***
    To destroy a particular resource



