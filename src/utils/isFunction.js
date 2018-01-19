//dark magic to detect if an input is a function
//Source: https://stackoverflow.com/a/7356528/1337392
const isFunction = functionToCheck => {
    const getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]" ? true : false ;
};

module.exports = isFunction;
