define(['repositories/activeSelections'], function ( activeSelections) {
        //#region view model
        var reportsCreateViewModel = function () {
            var self = this;

            self.activate = activate;
           
            self.clearAll = clearAll;
           
        };

        //#endregion view model

        return reportsCreateViewModel;

        //#region internal functions



         function clearAll() {
            activeSelections.original.filters.location.state([]);
            activeSelections.original.filters.location.county([]);
            activeSelections.original.filters.location.msa([]);
            activeSelections.original.filters.location.lma([]);
            activeSelections.original.filters.location.city([]);
        }
           

        function activate() {

            $(".navTab #create").addClass("active");
            activeSelections.original.reportOptionsType('original');
        }

        //#endregion internal functions

    });
