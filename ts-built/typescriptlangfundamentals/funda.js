var osName = 'android';
console.log('OS Name is $(osName)');
function whatisOS() {
    return osName;
}
function thisIsVersion(ver) {
    console.log('OS version is:  $(ver)');
}
whatisOS();
thisIsVersion(2);
