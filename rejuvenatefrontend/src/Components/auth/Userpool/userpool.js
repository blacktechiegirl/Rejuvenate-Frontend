import { CognitoUserPool } from 'amazon-cognito-identity-js'

const userPoolData = {
    UserPoolId: "us-east-1_vSdZsskyF",
    ClientId: "18pei9v95i4rkddlcrccisks1r"
}

export default new CognitoUserPool(userPoolData)