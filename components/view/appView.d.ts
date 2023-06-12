import News from './news/news';
import Sources from './sources/sources';
import { ISource, INews } from '../../types';
export declare class AppView {
    news: News;
    sources: Sources;
    drawNews(data: INews | undefined): void;
    drawSources(data: ISource | undefined): void;
}
export default AppView;
