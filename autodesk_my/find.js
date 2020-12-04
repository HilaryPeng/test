/**
 * @param {*} local  string 
 * Array.prototype.find()
 */
function getMomentLocalMap(local) {
    const momentLocalArray = ['cs', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'pu', 'tr'];
    const momentLocal = local.toLocaleLowerCase();
    return momentLocalArray.find(item => momentLocal.indexOf(item) === 0) || momentLocal;
}
