import { Contact } from './contact';
import { Material } from './material';

export interface Campaign {
    slug: string;
    title: string;
    content: string;
    headline: string;
    signupMessage: string;
    thankYouMessage: string;
    heroImageUrl: string;
    materials: Material[];
    signup_list: Contact[];
}

