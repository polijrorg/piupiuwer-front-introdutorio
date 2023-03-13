export default interface Piu {
    id: number;
    user: {
        name: string;
        handle: string;
        image: string;
    };
    text: string;
    likes: number;
    comments: number;
    time: Date;
}
