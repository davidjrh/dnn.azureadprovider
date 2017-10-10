import util from "../utils";
class ApplicationService {
    getServiceFramework(controller) {
        let sf = util.utilities.sf;
        //sf.moduleRoot = "PersonaBar";
        sf.controller = controller;
        return sf;
    }

    getSettings(callback) {
        const sf = this.getServiceFramework("AppInsights");        
        sf.get("GetSettings", {}, callback);
    }

    updateSettings(payload, callback, failureCallback) {
        const sf = this.getServiceFramework("AppInsights");        
        sf.post("UpdateSettings", payload, failureCallback, callback);
    }    
}
const applicationService = new ApplicationService();
export default applicationService;