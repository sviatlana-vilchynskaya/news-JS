import { IRespParams, IRequestOptions } from '../../types';
declare class Loader {
    baseLink: string;
    options: {
        apiKey: string;
        options?: IRequestOptions;
    };
    constructor(baseLink: string, options: {
        apiKey: string;
        options?: IRequestOptions;
    });
    getResp<T>({ endpoint, options }: IRespParams): Promise<T | undefined>;
    errorHandler(res: Response): Response;
    makeUrl(options: IRequestOptions | undefined, endpoint: string): URL;
    load<T>(method: string, endpoint: string, options?: IRequestOptions): Promise<T | undefined>;
}
export default Loader;
