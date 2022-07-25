import tmdbClient from "@api/client";

const rootApiMiddleware = (): any[] => [tmdbClient.middleware];

export default rootApiMiddleware;
