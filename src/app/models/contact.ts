export interface Contact {
    _id: string;
    slug: string;
    title: string;
    bucket: string;
    created: Date;
    modified_at: Date;
    metadata: Record<string, any>;
}