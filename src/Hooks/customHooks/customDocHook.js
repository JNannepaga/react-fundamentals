import {useEffect} from 'react';

export function useDocHook(count) {
    useEffect(()=>{
        document.title = `cliked ${count} times`;
    }, [count]);
}
