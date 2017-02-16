var rc = require('rc')

var config = module.exports = rc('license-report', {

	/*
		possible outputs:

		json || table || csv
	*/
	output: 'json',

	/*
		if output is csv
	*/
	delimiter: ',',

	/*
		export deps or dev deps. falsey -> output everything
	*/
	only: null,

	/*
		npm registry url
	*/
	registry: 'https://registry.npmjs.org/',

	/*
		an array of package names that will be excluded from the  report
	*/
	exclude: [],

	/*
		fields participating in the report and their order
	*/
	fields: [
		'name',
		'uri',
		'version',
		'licenseType',
		'licenseHolder',
	],

	name: {
		value: '',
		label: 'name'
	},
	uri: {
		value: 'n/a',
		label: 'uri'
	},
	version: {
		value: '',
		label: 'version'
	},
	licenseType: {
		value: 'n/a',
		label: 'license type'
	},
	licenseHolder: {
		value: 'n/a',
		label: 'license holder'
	}
})
