export interface Material {
    _id: string;
    slug: string;
    title: string;
    bucket: string;
    created: Date;
    modified_at: Date;
    content: string;
    materialDescription: string;
    materialUrl: string;
    metadata: Record<string, any>;
}
