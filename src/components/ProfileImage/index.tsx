import * as S from './styles';

interface ProfileImageProps {
    size: string;
    src: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ size, src }) => {
    return (
        <S.ProfileBorder>
            <S.ProfileImage src={src} width={size} height={size} />
        </S.ProfileBorder>
    );
};

export default ProfileImage;
