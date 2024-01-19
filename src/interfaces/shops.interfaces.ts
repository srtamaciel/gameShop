export interface ShopResponse {
    results: ShopData[];
}

export interface ShopData {
    id: number;
    name: string;
    domain: string;
    slug: string;
    games_count: number;
    image_background: string;
    games: GamesNode[];
}

export interface GamesNode {
  id: number;
  slug: string;
  name: string;
  added: number;
}
