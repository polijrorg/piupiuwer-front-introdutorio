import ProfileImage from 'components/ProfileImage';
import User from 'interfaces/User';
import * as S from './styles';

interface SideBarProps {
    loggedInUser: User;
}

export const Sidebar: React.FC<SideBarProps> = ({
    loggedInUser: { name, handle, image }
}) => {
    return (
        <S.Sidebar>
            <S.Icon src="/assets/icons/Logo.svg" height="92px" width="102px" />
            <S.MenuWrapper>
                <S.MenuItem selected>
                    <S.Icon
                        src="/assets/icons/FilledHouse.svg"
                        height="32px"
                        width="32px"
                    />
                    <S.PageName>Página principal</S.PageName>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Icon
                        src="/assets/icons/Search.svg"
                        height="32px"
                        width="32px"
                    />
                    <S.PageName>Explorar</S.PageName>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Icon
                        src="/assets/icons/E-mail.svg"
                        height="32px"
                        width="32px"
                    />
                    <S.PageName>Mensagens</S.PageName>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Icon
                        src="/assets/icons/Bookmark.svg"
                        height="32px"
                        width="32px"
                    />
                    <S.PageName>Itens Salvos</S.PageName>
                </S.MenuItem>
            </S.MenuWrapper>
            <S.ProfileWrapper>
                <ProfileImage src={image} size="112px" />
                <S.ProfileName>{name}</S.ProfileName>
                <S.ProfileHandle>{`@${handle}`}</S.ProfileHandle>
                <S.Icon
                    src="/assets/icons/LogOut.svg"
                    height="32px"
                    width="32px"
                />
            </S.ProfileWrapper>
        </S.Sidebar>
    );
};

export default Sidebar;
