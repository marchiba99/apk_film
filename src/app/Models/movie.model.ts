export interface Movies {
  date?: {maximum: Date, minimum: Date}
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: Array<number>;
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: Date;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
  total_pages: number;
  total_results: number;
  nota_marc: number;
  nota_maria: number;
}
