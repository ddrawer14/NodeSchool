
// Use array#some and Array#every to check that every user which is passed to your returned function (submittedUsers) exists in the array passed to the exported function (goodUsers).

module.exports = function checkUsersValid(goodUsers) {

	return function allUsersValid(submittedUsers) {

		// goodUsers: original list
		// submittedUsers: supplied list

		return submittedUsers.every(function(submittedUserVal) {
			return goodUsers.some(function(origUserVal) {
				if (origUserVal.id === submittedUserVal.id) return true;
			})
		});
	}
};

