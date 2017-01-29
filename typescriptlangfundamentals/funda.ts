let osName: string = 'android';
console.log('OS Name is $(osName)');

function whatisOS() : string {
    return osName;
}

function thisIsVersion (ver: number){
    console.log('OS version is $(ver)')
}

whatisOS();
thisIsVersion(2);