export const identityScriptLoader = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const tag = document.createElement('script');
        tag.src = "https://sdk.monnify.com/plugin/monnify.js";
        tag.async = true;
        
        tag.addEventListener('load', () => {
            resolve(true); // Script loaded successfully
        });

        tag.addEventListener('error', (event: Event) => {
            reject(`Error loading script: ${event}`); // Script loading error
        });

        document.body.appendChild(tag);
    });
};
