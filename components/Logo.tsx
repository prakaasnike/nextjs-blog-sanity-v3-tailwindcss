import Image from "next/image";
import LightLogoImage from '../public/logolight.png'
const Logo = (props: any) => {
    const { renderDefault, title } = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="object-cover rounded-full"
                width={50}
                height={50}
                src={LightLogoImage}
                alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
};

export default Logo;