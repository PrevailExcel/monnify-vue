import { ref, onMounted } from 'vue'
import { identityScriptLoader } from './components/loadScript'

export const useMonnify = (props) => {
    const scriptLoaded = ref(false);
    const scriptError = ref('');

    const options = {
        amount: props.amount,
        currency: props.currency ?? "NGN",
        reference: props.ref ?? new String((new Date()).getTime()),
        customerFullName: props.name,
        customerEmail: props.email,
        apiKey: props.apiKey,
        contractCode: props.contractCode ?? null,
        paymentDescription: props.description,
        metadata: props.metadata,
        incomeSplitConfig: props.incomeSplitConfig,
        onLoadStart: props.onLoadStart,
        onLoadComplete: props.onLoadComplete,
        onComplete: props.onComplete,
        onClose: props.onClose
    };

    onMounted(async () => {
        try {
            await identityScriptLoader();
            scriptLoaded.value = true;
        } catch (error) {
            scriptError.value = error;
        }
    });

    const payWithMonify = () => {
        if (scriptLoaded.value)
            window.MonnifySDK.initialize(options);
    }

    return payWithMonify;
}

export default useMonnify;
