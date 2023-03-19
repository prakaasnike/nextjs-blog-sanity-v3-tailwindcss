import Image from "next/image";

const Logo = (props: any) => {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full object-cover"
                width={50}
                height={50}
                src="https://media.licdn.com/dms/image/C5603AQEegF6yYU4Fbw/profile-displayphoto-shrink_400_400/0/1640924161843?e=1684972800&v=beta&t=fY75RzHZKPliuyZ2msi5VA3pe-_RAMAUggFI_8FyfyY"
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
};

export default Logo;