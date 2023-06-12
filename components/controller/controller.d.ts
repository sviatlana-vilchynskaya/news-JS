import AppLoader from './appLoader';
import { INews, ISource } from '../../types';
declare class AppController extends AppLoader {
    getSources(): Promise<ISource | undefined>;
    getNews(e: Event): Promise<INews | undefined> | undefined;
}
export default AppController;
