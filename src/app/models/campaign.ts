import { Material } from './materials';

export interface Campaign {
    slug: string;
    title: string;
    content: string;
    pageTitle: string;
    headline: string;
    signupMessage: string;
    thankYouMessage: string;
    heroImageUrl: string;
    materials: Material[];
}

