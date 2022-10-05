import { Painting } from "../typings";

export const fetchPaintings = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPaintings`);

    const data = await res.json();
    const paintings: Painting[] = data.paintings;

    return paintings;
}