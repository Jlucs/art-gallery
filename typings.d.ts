export interface Painting {
    _id: string;
    title: string;
    description: string;
    image: {
        asset: {
            url: string;
        }
    };
    slug: {
        current: string;
    }
    alt: string;
    body: [object];
};

export interface Category {
    _id: string;
    title: string;
    description: string;
    slug: {
        current: string;
    }
    paintings: Painting[];
    image: {
        asset: {
            url: string;
        }
    };
    alt: string;
};


export interface Collection {
    _id: string;
    title: string;
    description: string;
    slug: {
        current: string;
    }
    image: {
        asset: {
            url: string;
        }
    };
    alt: string;
};
