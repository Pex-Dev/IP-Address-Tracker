function isIP(value){
    return isIPv4(value) || isIPv6(value);
}

function isIPv4(value) {
    const regexIPv4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regexIPv4.test(value);
}

function isIPv6(value) {
    const regexIPv6 = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/;
    return regexIPv6.test(value);
}

function isDomain(value) {
    const regex = /^(?!-)(?!.*-$)[A-Za-z0-9-]{1,63}(?=\.[A-Za-z0-9-]{2,})(?:\.[A-Za-z]{2,})+$/;
    return regex.test(value);
}

export {isIP,isDomain};