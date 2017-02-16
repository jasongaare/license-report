var assert = require('assert')
var getPackageReportData = require('../lib/getPackageReportData.js')

describe('getPackageReportData', function () {
	this.timeout(10000)

	it('gets the package report data', function (done) {

		getPackageReportData('async', '>0.0.1', function(err, data) {
			assert.strictEqual(data.name, 'async')
			assert.strictEqual(data.licenseType, 'MIT')
			assert.strictEqual(data.uri, 'https://github.com/caolan/async.git')

			done()
		})
	})

	it('returns something when semver is invalid', function (done) {
		getPackageReportData('async', 'a.b.c', function(err, data) {
			assert.strictEqual(data.name, 'async')
			assert.strictEqual(data.version, 'skipping async (invalid semversion)')

			done()
		})
	})
	it('returns an error when no versions satisfy the condition', function (done) {
		getPackageReportData('async', '0.0.1', function(err, data) {
			assert(err.message.indexOf('cannot find a version that satisfies range') === -1)

			done()
		})
	})
})
