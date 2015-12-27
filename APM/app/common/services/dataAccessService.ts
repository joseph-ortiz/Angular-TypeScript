module app.common {
    interface IDataAccessService {
    }
    
    interface IProductResource
        extends ng.resource.IResource<app.domain.IProduct> {
    }
    
    export class DataAccessService
        implements IDataAccessService {
            
            static $inject = ["$resource"];
            constructor(private $resource: ng.resource.IResourceService) {
                
            }
            
            getProductResrouce(): ng.resource.IResourceClass<IProductResource> {
                return this.$resource("/api/products/productId");
            }
        }
}