export default interface Piu {
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
