/**
 * hookAPIData()
 * @param state - value return from createAPI function
 * @param props.reducerPath - name of reducer path
 * @param props.tagType - define in provider in query / mutation
 * @returns data of query or undefine
 * best to use with createApi and createAdapterEntity selector function
 * @exemple
 * this is default of value return from create api state hook in create Adapter
 * @json
 * {
 *     "TMDB_API": {
 *         "queries": {
 *             "getMovies({\"page\":1,\"type\":\"upcoming\"})": {
 *                 "status": "pending",
 *                 "endpointName": "getMovies",
 *                 "requestId": "_00LlutE7cV2eyqZV7zZ9",
 *                 "originalArgs": {
 *                     "page": 1,
 *                     "type": "upcoming"
 *                 },
 *                 "startedTimeStamp": 1659216713899
 *             }
 *         },
 *         "mutations": {},
 *         "provided": {},
 *         "subscriptions": {
 *             "getMovies({\"page\":1,\"type\":\"upcoming\"})": {
 *                 "_00LlutE7cV2eyqZV7zZ9": {
 *                     "pollingInterval": 0
 *                 }
 *             }
 *         },
 *         "config": {
 *             "online": true,
 *             "focused": true,
 *             "middlewareRegistered": true,
 *             "refetchOnFocus": false,
 *             "refetchOnReconnect": false,
 *             "refetchOnMountOrArgChange": false,
 *             "keepUnusedDataFor": 60,
 *             "reducerPath": "TMDB_API"
 *         }
 *     }
 * }
 */

export const hookAPIData = (
  state: any,
  props: {
    reducerPath: string;
    tagType: { type: string; id: string };
  }
) => {
  const {
    reducerPath,
    tagType: { type, id },
  } = props;
  if (!state[reducerPath]) return;
  const reducer = state[reducerPath];
  if (!state[reducerPath].provided[type]) return;
  const queriesBases = reducer.provided[type][id];
  if (!queriesBases) return;
  // get last of query
  const queriesBase = queriesBases[queriesBases.length - 1];
  return reducer.queries[queriesBase].data;
};
