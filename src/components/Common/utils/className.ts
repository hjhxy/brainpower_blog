type Names = Array<string | undefined | Record<string, boolean>>

export function genClassNameArr(...names: Names): string[] {
    const nameArr: string[] = [];

    names.forEach((name) => {
        if (!name){
            return;
        }

        if (typeof name === 'string') {
            nameArr.push(name);
            return;
        }

        for (const [key, value] of Object.entries(name)) {
            if (value) {
                nameArr.push(key);
            }
        }
    
    })

    return nameArr;
}