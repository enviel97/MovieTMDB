export interface IProvidesTag {
  type: string;
  id: any;
}

export type Query<Req> = (req?: Req) => {
  url: string;
  params?: object;
};

export type TransformResponse<Res, ResResult> = (res: Res) => ResResult;

export type ProvidesTags<Tags> = (
  result: Tags
) => IProvidesTag | IProvidesTag[];

export interface IQuery<Req = any, Res = any, ResResult = Res | any> {
  query: Query<Req>;
  transformResponse?: TransformResponse<Res, ResResult>;
  providesTags?: ProvidesTags<ResResult> | any;
}
