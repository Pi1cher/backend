export interface ISuperhero {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images?: Array<{
    name?: string;
    img?: {
      data?: Buffer;
      contentType?: string;
    };
  }>;
}
