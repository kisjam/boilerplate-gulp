const polifillForeach = () => {
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}
}

module.exports = polifillForeach;
