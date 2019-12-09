/**
 * Constructs an object from a series of [key, value]
 * pairs. The counterpart to Object.entries.
 * @param entries an array of [key, value] pairs
 */
export const fromEntries = <K extends string | number | symbol,V>(entries: Iterable<[K, V]>) => 
    [...entries].reduce<Record<K,V>>((o, [k,v]) =>
        (o[k] = v, o), {} as Record<K,V>);

/**
 * Filters undefined key/value pairs from a Record object.
 * @param o a Record object to filter undefined values from
 */
export const filterUndefinedFromObject = <K extends string,V>(o: Record<K,V>): Record<K, NonNullable<V>> => 
    fromEntries(Object.entries(o)
        .filter(
            (kv): kv is [K, NonNullable<V>] =>
                kv[1] !== undefined && kv[1] !== null
        ))
