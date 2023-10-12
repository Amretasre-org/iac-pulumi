require('dotenv').config();
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");

const subnetsModule = require("./resources/subnet");
const routeTable = require("./resources/routeTable");
const routeTableAssociation = require("./resources/routeTableAssociation");
const route = require("./resources/publicRoute");
const subnetCidr = require("./utils/generateCidr");

const main = new aws.ec2.Vpc(process.env.VPC_NAME, {
    cidrBlock: "10.0.0.0/16",
    instanceTenancy: "default",
    tags: {
        Name: process.env.VPC_NAME,
    },
});

const igw = new aws.ec2.InternetGateway(process.env.GW_NAME, {
    vpcId: main.id,
    tags: {
        Name: process.env.GW_NAME,
    },
});

// Create Public Route Table
const publicRouteTable = routeTable.createPublicRouteTable(main, igw, process.env.PUBLIC_ROUTE_TABLE_NAME);

// Create Private Route Table
const privateRouteTable = routeTable.createPrivateRouteTable(main, process.env.PRIVATE_ROUTE_TABLE_NAME);


const mainNetwork = '10.0.0.0/16';
const totalSubnets = 6;
const subnetMask = 24;


const subnets_arr = subnetCidr.generateCidr(mainNetwork, totalSubnets, subnetMask);

for (let i = 0; i < totalSubnets; i++) {
    const availabilityZone = `us-east-1${String.fromCharCode(97 + (i % 3))}`;
    const isPublic = i < 3; // First 3 subnets are public, the rest are private
    const subnetName = isPublic ? `csye6225-public-subnet-${i + 1}` : `csye6225-private-subnet-${i + 1}`;
    const subnetAssociationName = isPublic ? `csye6225-public-routing-association-${i + 1}` : `csye6225-private-routing-association-${i + 1}`;

    const subnets = subnetsModule.createSubnets(main, subnetName, availabilityZone, subnets_arr[i].toString());

    const subnetAssociation = routeTableAssociation.createRouteTableAssociation(isPublic ? publicRouteTable : privateRouteTable, subnets, subnetAssociationName);
}

const publicRoute = route.createPublicRoutes(publicRouteTable, igw, process.env.PUBLIC_ROUTE_NAME);



