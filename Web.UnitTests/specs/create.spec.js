define(['viewmodels/reports/create', 'repositories/activeSelections','lib/jasmine.amd/jasmineAmd'], function (creatjs, activeSelections, jasmine) {
	//overriding jasmine variables
	var env = jasmine.getEnv(),
		describe = env.describe,
		it = env.it,
		expect = env.expect,
		beforeEach = env.beforeEach;

	describe('viewmodels/reports/create', function () {
		var createReports;

		beforeEach(function () {
			createReports = new creatjs();
		});
		describe('Clearall', function () {
			it('Clearing all location filters', function () {
				activeSelections.original.filters.location.state.push('test');
				activeSelections.original.filters.location.county.push('test');
				activeSelections.original.filters.location.msa.push('test');
				activeSelections.original.filters.location.lma.push('test');
				activeSelections.original.filters.location.city.push('test');

				createReports.clearAll();
				expect(activeSelections.original.filters.location.state().length).toBe(0);
				expect(activeSelections.original.filters.location.county().length).toBe(0);
				expect(activeSelections.original.filters.location.msa().length).toBe(0);
				expect(activeSelections.original.filters.location.lma().length).toBe(0);
				expect(activeSelections.original.filters.location.city().length).toBe(0);
			});

		});
		describe('Activate', function () {
			it('Check result of activate function', function () {
				loadFixtures('jquery_fixture.html');
				createReports.activate();
				var result = activeSelections.original.reportOptionsType();
				expect(result).toEqual("original");
				expect($(".navTab #create").hasClass("active")).toBeTruthy();
			});
		});
	});
});





