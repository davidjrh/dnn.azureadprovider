import util from "../utils";
class ApplicationService {
    getServiceFramework(controller) {
        let sf = util.utilities.sf;
        sf.controller = controller;
        return sf;
    }

    getSettings(callback) {
        const sf = this.getServiceFramework("AzureAD");        
        sf.get("GetSettings", {}, callback);
    }

    updateSettings(payload, callback, failureCallback) {
        const sf = this.getServiceFramework("AzureAD");        
        sf.post("UpdateSettings", payload, failureCallback, callback);
    }    
}
const applicationService = new ApplicationService();
export default applicationService;