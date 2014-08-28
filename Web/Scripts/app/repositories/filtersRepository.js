define(function (require) {

    var filtersRepository = function (reportName) {
        var self = this;
       

        self.reportOptionsType  = ko.observable("original");
      

      //#endregion EXPORT

        self.filters = {
  

            location: {
                state: ko.observableArray(),
                county: ko.observableArray(),
                msa: ko.observableArray(),
                lma: ko.observableArray(),
                city: ko.observableArray(),
                  }

           
            };


      
        };


    return filtersRepository;

});
