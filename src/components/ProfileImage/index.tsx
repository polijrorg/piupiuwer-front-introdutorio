import * as S from './styles';

interface ProfileImageProps {
    size: string;
    src: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ size, src }) => {
    return <S.ProfileImage size={size} src={src} width={size} height={size} />;
};

export default ProfileImage;
