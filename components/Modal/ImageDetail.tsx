type Props = {
    image?: string;
}

export default function ImageDetail({ image }: Props) {
    return (
        <img
        src={`${image}`}
        className="object-cover rounded shadow-lg h-[66vh] w-full"
        />
    );
}