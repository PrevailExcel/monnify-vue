interface UseMonnifyOptions {
    amount: number;
    currency: string;
    ref: string;
    name: string;
    email: string;
    apiKey: string;
    contractCode: string | null;
    description: string | null;
    metadata: object | null;
    incomeSplitConfig: Array<any> | null;
    onLoadStart: () => void;
    onLoadComplete: () => void;
    onComplete: () => void;
    onClose: () => void;
}

declare function useMonnify(options: UseMonnifyOptions): void;

export { useMonnify };
