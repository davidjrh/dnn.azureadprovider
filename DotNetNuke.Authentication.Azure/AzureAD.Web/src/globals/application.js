import utilities from "../utils";
const boilerPlate = {
    init() {
        // This setting is required and define the public path 
        // to allow the web application to download assets on demand 
        // eslint-disable-next-line no-undef
        // __webpack_public_path__ = options.publicPath;        
        let options = window.dnn.initAppInsights();

        utilities.init(options.utility);
        utilities.moduleName = options.moduleName;

    },
    dispatch() {
        throw new Error("dispatch method needs to be overwritten from the Redux store");
    }
};


export default boilerPlate;