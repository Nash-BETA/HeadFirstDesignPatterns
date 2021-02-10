import { Singleton } from "./Singleton";

export class HotterSingleton extends Singleton {
    protected static uniqueInstance: Singleton;

    private constructor() {
        super();
    }

    test (){
        console.log('HotterSingletonの中');
    }
}
