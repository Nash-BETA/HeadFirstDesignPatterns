import { Observer } from './Observer';
export interface Subject {
    registerObserver(ob: Observer): void;
    removeObserver(ob: Observer): void;
    notifyObservers(): void;
}